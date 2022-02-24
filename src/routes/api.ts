import { Router } from 'express';

import * as userController from '../controllers/user-controller';

const api = Router();

api.get('/', (req, res) => { return res.send({ 'hello': 'hai' }); });

api.get('/users', userController.userList);

export default api;
