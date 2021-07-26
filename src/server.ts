import path from 'path';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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

// run server
const port = process.env.APP_PORT;
app.listen(port, () => console.log(`server running on port ${port}`));
