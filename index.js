import express from "express";
import logger from 'morgan';
import cors from 'cors';
import userRouter from './app/user/router.js';
import path from 'path';
import db from './db/db.js'

const app = express();
const port = 3000;
const __dirname = path.resolve()

app.use(cors());
app.use(logger('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'))

app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>');
});

app.use('/api/', userRouter);

app.use((req, res) => {
    res.status(400);
    res.send({
        status: 'error',
        message: `${req.originalUrl} not found`
    })
});


app.listen(port, () => console.log(`running on port ${port}`));