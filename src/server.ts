import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import path from 'path';
require('dotenv/config');

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint nao encontrado.'});
})

server.listen(process.env.PORT);