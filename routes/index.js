const router = require("express").Router();
router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    
    res.send('Welcome to project 2')});
router.use('/players', require('./players'));
router.use('/teams', require('./teams'));

module.exports = router;