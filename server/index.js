import express from 'express';
import config from './config/config';
import connectDb from './db';
import router from './routes';
import logger from 'morgan';
import cors from 'cors';

const app = express();
connectDb(config.url);

app.use(cors());
app.use(logger('dev'));
app.use('/simplonBook', router)

app.listen(config.port, () => console.log(`Server listening on port ${config.port}`));