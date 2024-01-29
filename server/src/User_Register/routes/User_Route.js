const router = require("express").Router();
const user_controller = require("../controller/User_controller");


router.post("/createUser", user_controller.createUser);
router.get("/list_user", user_controller.list_user);
router.delete("/delete_all_user", user_controller.delete_all_user);


module.exports = router