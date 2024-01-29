require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const {sequelize, check} = require("./src/utils/db");
const User = require("./src/User_Register/models/User")
const user_register_route = require("./src/User_Register/routes/User_Route");
const user_login_route = require("./src/User_Login/routes/User_Login_Routes");


app.use(bodyParser.json());
app.use(user_register_route);
app.use(user_login_route);


sequelize
    .sync()
    .then((result) =>{
        check();
        // console.log(result)
        app.listen(process.env.SERVER_PORT,()=>{
            console.log(`This server running on port ${process.env.SERVER_PORT }`)
        });

    }).catch((err) => {
    console.error("Sequelize Initialisation threw an error:", err);
  });


