import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from 'router/index.js';

dotenv.config();

const app = express();
const DB = process.env.MONGO_URL;

app.use(
  cors({
    credentials: true,
  }),
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080/');
});

if (!DB) {
  throw new Error('DATABASE_URL is not set');
}

mongoose.Promise = Promise;
mongoose.connect(DB);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());
