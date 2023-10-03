module.exports = (req, res, next) => {
    const { model } = req.params;
    try {
        if (['Character', 'Film', 'Planet'].includes(model)) {
            return next()       
        }else{
            throw Error('Invalid Model')
        }
        
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}