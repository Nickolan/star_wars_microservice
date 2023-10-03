const { Router } = require('express')
const controllers = require('../controllers')
const middlewares = require('../middlewares')

const router = Router()

router.get('/', controllers.getPlanets)

router.get('/:id', controllers.getOnePlanet)

router.post('/', middlewares.planetVerification, controllers.createPlanet)

module.exports = router;