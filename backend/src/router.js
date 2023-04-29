const express = require("express");

const animeController = require("./controllers/animeController")

const router = express.Router();

router.get("/animes", animeController.getAll)

module.exports = router;