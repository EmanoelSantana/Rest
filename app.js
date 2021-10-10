require('dotenv').config();
const express = require('express');
const useRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/login', () => {
    try {
        console.log('Banco carregado');
    } catch (err) {
        console.log(err);
    }
});

app.use('/user', express.json(),  useRouter);

app.use('/admin', express.json(), adminRouter);


app.listen(process.env.PORT, () => { console.log('Servidor rodando!') });
