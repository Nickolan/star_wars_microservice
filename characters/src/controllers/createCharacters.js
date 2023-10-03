const Character = require('../data');
const {response} = require('../utils')

module.exports = async (req, res) => {
    const character = req.body
    try {
        const newCharacter = await Character.create(character);
        response(res, 200, newCharacter);
        
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}