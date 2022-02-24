import { Request, Response } from 'express';

import { User } from '../models/user';

export const userList = async (req: Request, res: Response) => {
    let users = await User.find();
    return res.send(users);
}
