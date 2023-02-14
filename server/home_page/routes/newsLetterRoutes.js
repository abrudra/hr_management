const newsLetterController = require("../controller/newsLetterController");
// const checkAuthMiddleware = require("../../middleware/checkAuth")

const router = require("express").Router();

router.post("/addNewsLetter", newsLetterController.addNewsLetter);

router.get("/getAllNewsLetter", newsLetterController.getAllNewsLetter);

router.get("/:id", newsLetterController.getSingleNewsLetter);

router.put("/:id", newsLetterController.updateNewsLetter);

router.delete("/:id", newsLetterController.deleteNewsLetter);

module.exports = router;
