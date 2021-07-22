import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = process.env.APP_PORT;

app.get('/', (req, res) => {
    res.send(`Hello from ${process.env.APP_NAME}`);
});

app.listen(port, () => console.log(`server running on port ${port}`));
