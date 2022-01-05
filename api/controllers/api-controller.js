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

async function getForId(req, res){
    console.log('ID: ', req.params.id)
    try {
        const response = await AXIOS({
            method: 'get',
            url: 'https://api.mercadolibre.com/items/'+req.params.id,
            responseType: 'json'
        });

        let {data} = response
        

        let producto = new Producto();

        producto.id = data.id;
        producto.title = data.title;
        producto.price = data.price;
        let item_condicion = data.attributes.filter(a => a.id == 'ITEM_CONDITION');
        producto.item_condicion = item_condicion[0].value_name; 
        producto.img = data.pictures.map( i => i.url);
        console.log('data: ', data)

        res.send(producto);

        // return producto;

    } catch (error) {
        console.error(error);
    }
}

