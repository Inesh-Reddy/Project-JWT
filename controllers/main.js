const login = async (req, res) => {
    res.json({
        msg: 'Fake login/Register/signup Route'
    })
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random()* 100);
    res.status(200).json({
        msg: 'Hello Inesh Reddy', 
        secret: `Here is your authorized data, Your Lucky Number is ${luckyNumber}`
    })
}


module.exports = {
    login,
    dashboard
}