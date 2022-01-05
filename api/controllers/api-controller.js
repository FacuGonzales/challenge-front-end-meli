const AXIOS = require('axios');
const Producto = require('../models/producto');
const _producto = new Producto();

function prueba(req, res) {
    res.send(productos);
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
        resultados.forEach(element => {
            _producto.id = element.id;
            _producto.title = element.title;
            _producto.price = element.price;
            _producto.free_shipping = element.shipping.free_shipping;
            _producto.state_name = element.address.state_name;
            _producto.img = element.thumbnail
            productos.push(_producto);
        });

        res.send(productos);

        // return productos;
    } catch (error) {
        console.error(error);
    }

}

async function getForId(req, res){
    console.log('ID: ', req.params.id)
    try {
        const response = await AXIOS({
            method: 'get',
            url: 'https://api.mercadolibre.com/items/'+req.params.id,
            responseType: 'json'
        });

        let {data} = response
        
        _producto.id = data.id;
        _producto.title = data.title;
        _producto.price = data.price;
        let item_condicion = data.attributes.filter(a => a.id == 'ITEM_CONDITION');
        _producto.item_condicion = item_condicion[0].value_name; 
        _producto.img = data.pictures.map( i => i.url);

        res.send(_producto);

        // return producto;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    prueba,
    getForSearch,
    getForId,
};