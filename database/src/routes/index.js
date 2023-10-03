const { Router } = require('express');
const store = require('../database')
const {validateModel} = require('../middleware')

const router = Router();

router.get('/:model', validateModel, async (req, res) => {
    const { model } = req.params;
    const response = await store[model].list();
    res.status(200).json(response);
})

router.get('/:model/:id', validateModel, async (req, res) => {
    const { model, id } = req.params;
    const response = await store[model].get(id);
    res.status(200).json(response);
})

router.post('/:model', validateModel, async (req, res) => {
    const { model } = req.params;
    const body = req.body;
    try {
        const response = await store[model].insert(body);
        res.status(200).json(response);
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router;