const userController = require("../controllers/userController");

const router = require("express").Router();
const checkAuthMiddleware = require("../../middleware/checkAuth");

router.post("/signUp", userController.signUp);
router.post("/login", userController.login);
router.get("/getAllEmployee", userController.getAllemployee);
router.put(
  "/:id",
  checkAuthMiddleware.checkAuth,
  userController.updateEmployee
);
router.delete(
  "/:id",
  checkAuthMiddleware.checkAuth,
  userController.deleteEmployee
);
router.get("/:id", userController.getEmployeeById);


module.exports = router;
