const express = require('express');
const jwt = require('jsonwebtoken');
const jwtpassword = "123456"
const app = express ();

const port  = 3000;
app.use(express.json());
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
app.listen(port, () => {
    console.log(`Server is listening on port: ${port} ...`)
})