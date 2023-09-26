const { ClientError } = require('../utils/errors')

module.exports = (req, res, next) => {
    const { planetName } = req.body;
    if(planetName) return next()
    else throw new ClientError('Error with planer name', 401)
}