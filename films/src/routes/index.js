const { Router } = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = Router();

router.get('/', controllers.getFilms)

router.get('/:id', controllers.getOneFilm)

router.post('/', middlewares.filmValdation, controllers.createFilm)

module.exports = router;