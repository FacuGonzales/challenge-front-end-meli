const AXIOS = require('axios');
const Item = require('../models/item');

function prueba(req, res) {
    res.send(productos);
}

async function getForSearch(req, res) {
    const {search} = req.params;

    try{
        AXIOS.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
        .then(response => {
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

        }).catch(error => res.status(error.response.status).send({message:  error.response.data.message}));
    } catch (error) {
        return res.status(error.response.status).send({message:  error.response.data.message})
    }
}

async function getForId(req, res){
    const {id} = req.params;

    try{
        await AXIOS.all([
            AXIOS.get(`https://api.mercadolibre.com/items/${id}`),
            AXIOS.get(`https://api.mercadolibre.com/items/${id}/description`)
        ])
        .then(responseArr => {
            let {data} = responseArr[0];
            let {plain_text} = responseArr[1].data;
            
            let _itemDetail = new Item();
            _itemDetail.id = data.id,
            _itemDetail.title = data.title,
            _itemDetail.price = data.price,
            _itemDetail.sale_price = data.sale_price,
            _itemDetail.available_quantity = data.available_quantity,
            _itemDetail.sold_quantity = data.sold_quantity,
            _itemDetail.currency_id = data.currency_id,
            _itemDetail.img = data.pictures.map( i => i.url);
            _itemDetail.condition = data.condition,
            _itemDetail.shipping = data.shipping,
            _itemDetail.address = data.address;
            _itemDetail.description = plain_text
            res.send(_itemDetail);
    
        }).catch(error => res.status(error.response.status).send({message:  error.response.data.message}));
    } catch (error) {
        return res.status(error.response.status).send({message:  error.response.data.message})
    }
}

module.exports = {
    prueba,
    getForSearch,
    getForId,
};