const router = require("express").Router();
router.use('/', require('./swagger'));
const passport = require('passport');

router.get('/', (req, res) => {
    
    res.send('Welcome to project 2')});
router.use('/players', require('./players'));
router.use('/teams', require('./teams'));

//add log in and log out fuctionality 
router.get('/login', passport.authenticate('github'), (req, res) => {});
router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) {return next(err);}
    res.redirect('/');
  });  
});

module.exports = router;