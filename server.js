const express = require('express');
const bodyParser = require('body-parser')
const mongodb = require('./data/database');

const app = express();
app.use(cors({ methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']}))
app.use(cors({ origin: '*'}))
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', require('./routes'));


mongodb.initDb((err) =>{
    if (err){
        console.log(err);
    }
    else{
        app.listen(port, () => {console.log(`Database is listening and node running on port ${port}`)});
    }
});

