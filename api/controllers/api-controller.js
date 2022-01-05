const AXIOS = require('axios');
const Producto = require('../models/producto');

function prueba(req, res) {
    console.log('prueba')

}

async function getForSearch(req, res) {
    try {
        const response = await AXIOS({
            method: 'get',
            url: 'https://api.mercadolibre.com/sites/MLA/search?q='+req.params.search,
            responseType: 'json'
        });

        let resultados = response.data.results
        
        let productos = new Array();
        resultados.forEach(function(element){
            producto = {};
            producto.id = element.id;
            producto.title = element.title;
            producto.price = element.price;
            producto.free_shipping = element.shipping.free_shipping;
            producto.state_name = element.address.state_name;
            producto.img = element.thumbnail
            productos.push(producto);
        });

        res.send(productos);

        // return productos;
    } catch (error) {
        console.error(error);
    }

}
