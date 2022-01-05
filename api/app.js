const EXPRESS = require('express');
const app = EXPRESS();

const ApiRoutes = require('./routes/api-routes');

app.use(EXPRESS.urlencoded({extended: true}))
app.use(EXPRESS.static('public'))
app.use(EXPRESS.json())

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', ' Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api', ApiRoutes);

module.exports = app;