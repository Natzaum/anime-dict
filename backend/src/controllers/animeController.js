const animesmodels = require("../models/animemodels")

const getAll = async (req, res) => {

    const animes = await animesmodels.getAll();

    return res.status(200).json(animes)
};

module.exports = {
    getAll 
}
