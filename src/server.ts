import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import path from 'path';
import apiRoutes from '../src/routes/api';
require('dotenv/config');

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use(apiRoutes);

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint nao encontrado.'});
})

server.listen(process.env.PORT);