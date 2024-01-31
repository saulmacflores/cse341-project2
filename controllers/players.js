const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Players']
    const result = await mongodb.getDatabase().db().collection('players').find();
    result.toArray().then((players) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(players);

    });

};

const getSingle =  (req, res) => {
    //#swagger.tags=['Players']
    const playerId = new ObjectId(req.params.id);
    mongodb.getDatabase().db().collection('players').find({_id: playerId}).toArray((err, result) => {
        if (err) {
            res.status(400).json({message: err});
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(players[0]);
    });
};

const createPlayer = async (req, res) => {
    //#swagger.tags=['Players']
    const player = {
        name: req.body.name,
        lastn: req.body.lastn,
        jerseynum: req.body.jerseynum,
        gamesplayed: req.body.gamesplayed,
        assits: req.body.assits,
        goals: req.body.goals,
        country: req.body.country,
        league: req.body.league
    };
    const response = await mongodb.getDatabase().db().collection('players').insertOne(player);
    if (response.acknowledged) {
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'Some error occurred while creating the player.');
    }

};

const updatePlayer = async (req, res) => {
    //#swagger.tags=['Players']
    const playerId = new ObjectId(req.params.id);
    const player = {
        name: req.body.name,
        lastn: req.body.lastn,
        jerseynum: req.body.jerseynum,
        gamesplayed: req.body.gamesplayed,
        assits: req.body.assits,
        goals: req.body.goals,
        country: req.body.country,
        league: req.body.league
    };
    const response = await mongodb.getDatabase().db().collection('players').replaceOne({_id: playerId}, player);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'Some error occurred while updating the player.');
    }

};


const deletePlayer = async (req, res) => {
    //#swagger.tags=['Players']
    const playerId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('players').deleteOne({_id: playerId}); 
    if(response.deletedCount > 0) {
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'Some error occurred while deleting the player.');
    }
};

module.exports = {
    getAll, 
    getSingle,
    createPlayer,
    updatePlayer,
    deletePlayer
};