const validator = require('../helpers/validate');
const savePlayer = (req, res, next) => {
    const validationC = {
        name: 'required|string',
        lastn: 'required|string',
        jerseynum: 'required|numeric',
        gamesplayed: 'required|numeric',
        assits: 'required|numeric',
        goals: 'required|numeric',
        country: 'required|string',
        league: 'required|string'
    };

    validator(req.body, validationC, {}, (err, status) => {
        if (!status){
            res.status(412).send({
                success: false,
                message: 'validation failed',
                data: err
            });
        } else{
            next();
        }
    });
};
module.exports = {
    savePlayer
};