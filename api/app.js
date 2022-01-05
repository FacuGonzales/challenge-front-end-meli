const EXPRESS = require('express');
const app = EXPRESS();
const bodyParser = require('body-parser');

const ApiRoutes = require('./routes/api-routes');

// Middlewares de body-parse
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


module.exports = app;