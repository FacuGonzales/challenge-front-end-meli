const COLORS = require('colors');
const APP = require('./app');

const PORT = 8080;

const _server = APP.listen(PORT, () => console.log(`\n******* Servidor corriendo en el puerto ${_server.address().port} *******`.blue));
_server.on("error", error => console.error(`Error en servidor ${error}`.red));
