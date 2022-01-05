
class Producto {
    constructor(id, title, price, free_shipping, state_name, img, item_condicion, description){
        this.id = id,
        this.title = title,
        this.price = price,
        this.free_shipping = free_shipping,
        this.state_name = state_name,
        this.img = img,
        this.item_condicion = item_condicion,
        this.description = description
    }
}

module.exports = Producto;