import {ProductDetail} from 'Screens/ProductDetail';
import {ProductsList} from 'Screens/ProductsList';
import {Home} from 'Screens/Home'


export const routes = [{
    path: "/items",
    Component: ProductsList
},
{
    path: "item/:id",
    Component: ProductDetail
},{
    path: '/*',
    Component: Home
}
]