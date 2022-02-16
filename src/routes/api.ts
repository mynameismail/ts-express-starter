import { Router } from 'express';

const api = Router();

api.get('/', (req, res) => {
    return res.send({ 'hello': 'hai' });
});

export default api;
