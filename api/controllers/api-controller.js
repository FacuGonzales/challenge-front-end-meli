const AXIOS = require('axios');
const Item = require('../models/item');

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

        let {results} = response.data;
        let _newList = new Array();

        results.slice(0, 4).forEach(element => {

            let _item = new Item();

            _item.id = element.id,
            _item.title = element.title,
            _item.price = element.price,
            _item.sale_price = element.sale_price,
            _item.available_quantity = element.available_quantity,
            _item.sold_quantity = element.sold_quantity,
            _item.currency_id = element.currency_id,
            _item.img = element.thumbnail,
            _item.condition = element.condition,
            _item.shipping = element.shipping,
            _item.address = element.address,
            _item.description = element.description

            _newList.push(_item);
        });

        res.send(_newList);

        // return productos;
    } catch (error) {
        console.error(error);
    }

}

async function getForId(req, res){
    
    try {
        const responseItem = await AXIOS({
            method: 'get',
            url: `https://api.mercadolibre.com/items/${req.params.id}`,
            responseType: 'json'
        });
        
        let {data} = responseItem

        console.log(data);

        const responseDescription = await AXIOS({
            method: 'get',
            url: `https://api.mercadolibre.com/items/${req.params.id}/description`,
            responseType: 'json'
        });

        let {plain_text} = responseDescription.data;

        let _item = new Item();

        _item.id = data.id,
        _item.title = data.title,
        _item.price = data.price,
        _item.sale_price = data.sale_price,
        _item.available_quantity = data.available_quantity,
        _item.sold_quantity = data.sold_quantity,
        _item.currency_id = data.currency_id,
        _item.img = data.pictures.map( i => i.url);
        _item.condition = data.condition,
        _item.shipping = data.shipping,
        _item.address = data.address,
        _item.description = plain_text

        res.send(_item);

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