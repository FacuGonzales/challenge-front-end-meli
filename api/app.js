const EXPRESS = require('express');
const app = EXPRESS();

const ApiRoutes = require('./routes/api-routes');

app.use(EXPRESS.urlencoded({extended: true}))
app.use(EXPRESS.static('public'))
app.use(EXPRESS.json())


module.exports = app;