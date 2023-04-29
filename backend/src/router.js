const express = require("express");

const animeController = require("./controllers/animeController");
const animeMiddleware = require("./middlewares/animesmiddleware");

const router = express.Router();

router.get("/animes", animeController.getAll);
router.post("/animes", animeMiddleware.validatebody, animeController.createAnime);
router.delete("/animes/:id", animeController.deleteAnime);
router.put("/animes/:id", animeMiddleware.validatebody, animeController.updateAnime);

module.exports = router;