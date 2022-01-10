import { useEffect, useState } from 'react';

import {ProductCard} from 'components/ProductCard';
import { DetailsWraper } from 'components/DetailsWraper';
import { getSearchList } from 'services/searchServices';
import { useLocation, useNavigate } from 'react-router-dom'
import  queryString  from 'query-string'

import styles from './styles.module.scss'; 

export const ProductsList = () => {

    const [productsList, setProductsList]  = useState([])
    const { search } = useLocation()
    const  { search: querySearch }  = queryString.parse(search)
    const navigate = useNavigate()

    useEffect(()=>{
        getSearchList(querySearch).then((response)=> {
           setProductsList([...response.data])
        })
    }, [querySearch])


    const selectProductHandler = (id)=>{    
        console.log('parametro', id)
        navigate(`../item/${id}`, {replace: true})
    }

    return (
        <DetailsWraper breadcrumbs={[{text: 'Búsqueda', path: '/'}, {text: querySearch}]}>
            <div className={styles.container}>
            {productsList.map(prod => 
                <ProductCard 
                    key={prod.id} 
                    image={prod.img} 
                    description={prod.title} 
                    price={prod.price} 
                    city={prod.address.city_name}
                    onClick={()=>selectProductHandler(prod.id)}
                    currency_id={prod.currency_id}
                    free_shipping={prod.shipping.free_shipping}
                />)}
            </div>
        </DetailsWraper>
    )
}
