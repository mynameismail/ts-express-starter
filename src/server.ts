import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';

dotenv.config();

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(helmet());
app.use(compression());

app.use(morgan('tiny'));

// static
app.use('/static', express.static(path.join(__dirname, 'public')))

// api routes
var api = express.Router();
api.get('/', (req, res) => {
    res.send({ 'hello': 'hai' });
});

app.use('/api', api);

// web routes
app.get('/', (req, res) => {
    res.render('index');
});

app.use((req, res, next) => {
    res.status(404).send('page not found');
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).send('something wrong');
});

// run server
const port = process.env.APP_PORT;
app.listen(port, () => console.log(`server running on port ${port}`));
