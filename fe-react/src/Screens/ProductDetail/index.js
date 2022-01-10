import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { DetailsWraper } from 'components/DetailsWraper';
import { ProductCardDetails } from 'components/ProductCardDetails';

import { getDetails } from 'services/searchServices';
import { getValue } from 'services/localStorageServices'

import styles from './styles.module.scss'; 

export const ProductDetail = () => {

    const searchParam =  getValue('searchParam')

    const [product, setProduct] = useState() 

    const {id} = useParams()

    useEffect(() => {
        getDetails(id).then( response => {
            console.log('respuesta', response)
            setProduct(response.data)})
    }, [id])

    return (
        <DetailsWraper breadcrumbs={[{text: 'Resultados de la búsqueda', path: `/items?search=${searchParam}`}, {text: product &&`${product.title.slice(0,10)}...`}]}>
            <div className={styles.container}>
                {product && 
                <ProductCardDetails 
                image={product.img[0]} 
                description={product.description} 
                title={product.title} 
                info={product.condition === 'new'? `Nuevo - ${product.sold_quantity} vendidos` : `Usado - ${product.sold_quantity} vendidos`} 
                price={product.price}
                currency_id={product.currency_id}
                free_shipping={product.shipping.free_shipping}
            /> }
          </div>
        </DetailsWraper>
    )
}
