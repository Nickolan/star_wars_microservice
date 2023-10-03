const Planets = require('../data')
const {response} = require('../utils')

module.exports = async (req, res) => {
    const planet = req.body;
    const newPlanet = await Planets.create(planet)
    response(res, 202, newPlanet)
}