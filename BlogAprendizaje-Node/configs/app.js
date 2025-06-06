'use strict'
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { limiter } from '../middlewares/rate.limit.js';
import publicationRoutes from '../src/publication/publication.routes.js';
import commentRoutes from '../src/comment/comment.routes.js';

const configs = (app)=>{
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
    app.use(cors());
    app.use(helmet());
    app.use(limiter);
    app.use(morgan('dev'));
};

const routes = (app)=>{
    app.use('/v1/publication', publicationRoutes);
    app.use('/v1/Commentary', commentRoutes);
};

export const initServer = async()=>{
    const app = express();
    try {
        configs(app);
        routes(app);
        app.listen(process.env.PORT);
        console.log(`Server runnig in port ${process.env.PORT}`);
    } catch (error) {
        console.log('Server Init Failed', error);
    }
};