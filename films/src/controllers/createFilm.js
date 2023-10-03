const Character = require('../data')
const {response} = require('../utils')

module.exports = async (req, res) => {
    const film = req.body;
    const newMovie = await Character.create(film);
    response(res, 200, newMovie);
}