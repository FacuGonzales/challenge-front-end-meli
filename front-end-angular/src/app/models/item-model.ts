import { AddressModel } from "./address-model";
import { ShippingModel } from "./shipping-model";

export interface ItemModel {
    id?: string,
    title?: string,
    price?: string,
    sale_price?: string,
    available_quantity?: number,
    sold_quantity?: number,
    currency_id?: number,
    img?: string[],
    condition?: string,
    shipping?: ShippingModel,
    address?: AddressModel,
    description?: string,
}
