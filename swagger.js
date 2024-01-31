const swaggerAutogen = require('swagger-autogen')

const doc = {
    info: {
        title: 'Players Api',
        description: 'Players Api'
    },
    host: 'localhost:3000',
    schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];
swaggerAutogen(outputFile, endpointsFiles, doc);

//swagger team route

const swaggerAutogen2 = require('swagger-autogen')

const doc2 = {
    info: {
        title: 'Teams Api',
        description: 'Teams Api'
    },
    host: 'localhost:3000',
    schemes: ['https']
};

const outputFile2 = './swagger.json';
const endpointsFiles2 = ['./routes/index.js'];
swaggerAutogen2(outputFile2, endpointsFiles2, doc2);