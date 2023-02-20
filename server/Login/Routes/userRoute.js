const userController = require("../controllers/userController");

const router = require("express").Router();

router.post("/signUp", userController.signUp);
router.post("/login",userController.login)
router.get("/getAllEmployee", userController.getAllemployee);

module.exports = router ;