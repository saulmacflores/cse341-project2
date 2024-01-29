const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['teams']
    const result = await mongodb.getDatabase().db().collection('teams').find();
    result.toArray().then((teams) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(teams);

    });

};

const getSingle = async (req, res) => {
    //#swagger.tags=['Teams']
    const teamId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('teams').find({_id: teamId});
    result.toArray().then((teams) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(teams[0]);

    });
};

const createTeam = async (req, res) => {
    //#swagger.tags=['Teams']
    const team = {
        name: req.body.name,
        founded: req.body.founded,
        stadium: req.body.stadium,
        website: req.body.website,
        
    };
    const response = await mongodb.getDatabase().db().collection('teams').insertOne(team);
    if (response.acknowledged) {
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'Some error occurred while creating the new team.');
    }

};

const updateTeam = async (req, res) => {
    //#swagger.tags=['Teams']
    const teamId = new ObjectId(req.params.id);
    const team = {
        name: req.body.name,
        founded: req.body.founded,
        stadium: req.body.stadium,
        website: req.body.website,
    };
    const response = await mongodb.getDatabase().db().collection('teams').replaceOne({_id: teamId}, team);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'Some error occurred while updating the team info.');
    }

};


const deleteTeam = async (req, res) => {
    //#swagger.tags=['Teams']
    const teamId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('teams').deleteOne({_id: teamId}); 
    if(response.deletedCount > 0) {
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'Some error occurred while deleting the team.');
    }
};

module.exports = {
    getAll, 
    getSingle,
    createTeam,
    updateTeam,
    deleteTeam
};