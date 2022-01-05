const EXPRESS = require('express');
const { prueba, getForSearch, getForId } = require('../controllers/api-controller');

const ApiRoutes = EXPRESS.Router();

ApiRoutes.get('/', prueba);
ApiRoutes.get('/items/:search', getForSearch);
ApiRoutes.get('/item/:id', getForId);

module.exports = ApiRoutes;