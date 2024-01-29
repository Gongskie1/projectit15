const User = require("../model/User_model");


module.exports = {
    login: (req,res) =>{
        const {username, password} = req.body
        const login_user = {
            username:username,
            password:password
        }
        
        res.json({
            message: "Putang ina mo!",
            user:login_user
        })
    }
}