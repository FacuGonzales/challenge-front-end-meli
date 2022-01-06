
class Item {
    constructor(id, title, price, sale_price, available_quantity, sold_quantity, currency_id, shipping, img, condition, address, description){
        this.id = id,
        this.title = title,
        this.price = price,
        this.sale_price = sale_price,
        this.available_quantity = available_quantity,
        this.sold_quantity = sold_quantity,
        this.currency_id = currency_id,
        this.img = img,
        this.condition = condition,
        this.shipping = shipping,
        this.address = address,
        this.description = description
    }
}

module.exports = Item;
