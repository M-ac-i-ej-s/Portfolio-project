import userRouter from './routes/user.route.js';
import blockRouter from './routes/blocks.route.js';

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
mongoose.set('strictQuery', false)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const whitelist = ['http://127.0.0.1:4000','http://127.0.0.1:5173' ];
const corsOptions = {
    credentials: true,
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

app.use(cors(corsOptions));
mongoose.connect(
    `mongodb+srv://Mslupianek:${process.env.PASSWORD_ATLAS}@portfolio.btrkbcz.mongodb.net/`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log('error in connection');
        } else {
            console.log('mongodb is connected');
        }
    }
);

app.use('/user', userRouter);
app.use('/blocks', blockRouter);

app.listen(3000, () => {
    console.log(`Our server is running on port ${3000}`);
});