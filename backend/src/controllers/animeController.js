const animemodels = require("../models/animemodels")

const getAll = async (_req, res) => {

    const animes = await animemodels.getAll();

    return res.status(200).json(animes)
};

const createAnime = async (req, res) => {
    const createdAnime = await animemodels.createAnime(req.body);
    return res.status(201).json(createdAnime);
}

const deleteAnime = async (req, res) => {
    const {id} = req.params;

    await animemodels.deleteAnime(id);
    return res.status(204).json();
}

const updateAnime = async (req, res) => {

    const {id} = req.params;
    const animet = await animemodels.updateAnime(id, req.body);

    return res.status(200).json({message: "Valor atualizado", log: animet});
}

module.exports = {
    getAll,
    createAnime,
    deleteAnime,
    updateAnime
}
