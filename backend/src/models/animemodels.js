const connection = require("./connection");

const getAll = async () => {
    const [animes] = await connection.execute("SELECT * FROM animes");
    return animes;
};

const createAnime = async (anime) => {
    const{title} = anime;

    const dateUTC = new Date(Date.now()).toUTCString();

    const query = "INSERT INTO animes(title, status, created_at) VALUES(?, ?, ?)";
    
    const [createdAnime] = await connection.execute(query, [title, "pendente", dateUTC]);

    return {insertId: createdAnime.insertId};
}

const deleteAnime = async (id) => {
    const [removedAnime] = await connection.execute(`DELETE FROM animes WHERE id = ?`, [id]);
    return removedAnime;
}

const updateAnime = async (id, anime) => {
    const {title, status} = anime;
    
    const query = `UPDATE animes SET title = ?, status = ? WHERE id = ?`;

    const [updatedAnime] = await connection.execute(query, [title, status, id]);
    return updatedAnime;
}

module.exports = {
    getAll,
    createAnime,
    deleteAnime,
    updateAnime
}