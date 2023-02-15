const newsLetterController = require("../controller/newsLetterController");
const checkAuthMiddleware = require("../../middleware/checkAuth")

const router = require("express").Router();

router.post("/addNewsLetter",checkAuthMiddleware.checkAuth, newsLetterController.addNewsLetter);

router.get("/getAllNewsLetter", newsLetterController.getAllNewsLetter);

router.get("/:id", newsLetterController.getSingleNewsLetter);

router.put("/:id", checkAuthMiddleware.checkAuth, newsLetterController.updateNewsLetter);

router.delete("/:id",checkAuthMiddleware.checkAuth, newsLetterController.deleteNewsLetter);

module.exports = router;
