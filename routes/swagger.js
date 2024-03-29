const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
router.use('/api-docu', swaggerUi.serve);
router.get('/api-docu', swaggerUi.setup(swaggerDocument));

module.exports = router;