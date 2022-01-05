const AXIOS = require('axios');
const Producto = require('../models/producto');

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

            let item = new Producto();

            item.id = element.id,
            item.title = element.title,
            item.price = element.price,
            item.sale_price = element.sale_price,
            item.available_quantity = element.available_quantity,
            item.currency_id = element.currency_id,
            item.img = element.thumbnail,
            item.condition = element.condition,
            item.shipping = element.shipping,
            item.address = element.address,
            item.description = element.description

            productos.push(item);
        });

        console.log(resultados)
        res.send(productos);

        // return productos;
    } catch (error) {
        console.error(error);
    }

}

async function getForId(req, res){
    console.log('ID: ', req.params.id)
    try {
        const responseItem = await AXIOS({
            method: 'get',
            url: `https://api.mercadolibre.com/items/${req.params.id}`,
            responseType: 'json'
        });
        
        let {data} = responseItem

        const responseDescription = await AXIOS({
            method: 'get',
            url: `https://api.mercadolibre.com/items/${req.params.id}/description`,
            responseType: 'json'
        });

        let {plain_text} = responseDescription.data;

        let item = new Producto();

        item.id = data.id,
        item.title = data.title,
        item.price = data.price,
        item.sale_price = data.sale_price,
        item.available_quantity = data.available_quantity,
        item.currency_id = data.currency_id,
        item.img = data.pictures.map( i => i.url);
        item.condition = data.condition,
        item.shipping = data.shipping,
        item.address = data.address,
        item.description = plain_text

        res.send(item);

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