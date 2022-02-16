import { Router } from 'express';

const web = Router();

web.get('/', (req, res) => {
    return res.render('index');
});

export default web;
