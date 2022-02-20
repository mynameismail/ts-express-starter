import { Router } from 'express';
import { User } from '../models/user';

const api = Router();

api.get('/', (req, res) => {
    return res.send({ 'hello': 'hai' });
});

api.get('/users', async (req, res) => {
    let users = await User.find();
    return res.send(users);
});

export default api;
