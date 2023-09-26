//const planets = require('./planets.json')
const axios = require('axios')

module.exports = {
    list: async () => {
        const response = await axios.get("http://database:8004/Planet")
        return response.data
    },
    create: async () => {
        throw Error('Hay un error al momento de crear el planeta')
    }
}