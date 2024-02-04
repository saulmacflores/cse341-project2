const express = require('express');
const router = express.Router();

const playersController = require('../controllers/players');
const validation = require('../middleware/validate');
const {isAuthenticated} = require("../middleware/authenticate");

router.get('/', playersController.getAll);
router.get('/:id', playersController.getSingle);

router.post('/', validation, isAuthenticated.savePlayer, playersController.createPlayer);
router.put('/:id', validation, isAuthenticated.savePlayer, playersController.updatePlayer);
router.delete('/:id',isAuthenticated.playersController.deletePlayer);






module.exports = router;