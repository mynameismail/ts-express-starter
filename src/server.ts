import path from 'path';
import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import compression from 'compression';
import morgan from 'morgan';
import session from 'express-session';

dotenv.config();

import { init as initMongo } from './services/mongo';
import api from './routes/api';
import web from './routes/web';


initMongo();

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.disable('x-powered-by')
app.use(compression());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/**
 * Setup session
 */
const appSecret = process.env.APP_SECRET || 'secret';
app.use(session({
    secret: appSecret,
    resave: false,
    saveUninitialized: false
}));

declare module 'express-session' {
    interface SessionData {
        flash: any;
        auth: any;
    }
}

// flash session
app.use((req, res, next) => {
    res.locals.flash = req.session.flash || {};
    req.session.flash = {};
    next();
});


/**
 * Register routes
 */
// static
app.use('/static', express.static(path.join(__dirname, '../static')));

app.use('/api', api);
app.use('/', web);

// handle 404
app.use((req, res) => {
    res.status(404).send('page not found');
});

// handle 500
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (process.env.APP_ENV === 'production') {
        return res.status(500).send('something wrong');
    }
    next(err);
});

/**
 * Run server
 */
const port = Number(process.env.APP_PORT) || 3000;
app.listen(port, () => console.log(`server running on port ${port}`));
