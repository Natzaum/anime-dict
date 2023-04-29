const connection = require("./connection");

const getAll = async () => {
    const [animes] = await connection.execute("SELECT * FROM animes");
    return animes;
};

const createAnime = async (anime) => {
    const{title} = anime;

    const dateUTC = new Date(Date.now()).toUTCString();

    const query = "INSERT INTO animes(title, status, created_at) VALUES(?, ?, ?)";
    
    const createdAnime = await connection.execute(query [title, "pendente", ""])
}

module.exports = {
    getAll,
    createAnime
}