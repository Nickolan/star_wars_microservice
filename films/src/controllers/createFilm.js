const Character = require('../data')
const {response} = require('../utils')

module.exports = async (req, res) => {
    const newMovie = await Character.create();
    response(res, 200, newMovie);
}