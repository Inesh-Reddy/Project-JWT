require('dotenv').config();
require('express-async-errors');
const express = require('express');
const jwt = require('jsonwebtoken');
const jwtpassword = "123456"


const app = express ();
const port  = 3000;
const mainRouter = require('./routes/main')
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

app.use(express.static('./public'))
app.use(express.json());
app.use('/api/v1/', mainRouter)
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
app.get('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const token = jwt.sign(username, jwtpassword);
    res.status(200).json({
        Token: token
    })
})


app.post('/home', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    cosnt 
    res.status(400).json({

    })
})


const start = async (url) => {
    try {
        app.listen(port, ()=>{
            console.log(`Server is listening on port: ${port}...`)
        })
    } catch (error) {
        console.log(error);
    }
}
start();