const router = require("express").Router();
const Login_Controller = require("../controller/User_login_controller");

router.post("/login", Login_Controller.login);

module.exports = router