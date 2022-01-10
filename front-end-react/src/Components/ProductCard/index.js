import React from 'react'

import styles from './styles.module.scss'; 
import { Price } from 'components/Price';


export const ProductCard = ({image, description, price, city, onClick, currency_id, free_shipping}) => {
    return (
        <div className={styles.card} onClick={onClick}>
           <div className={styles.item}>
               <img src={image} className={styles.image} alt='descripcion'/>
           </div>
           <div className={`${styles.item} ${styles.description}`}>
                <Price price={price} currency_id={currency_id} free_shipping={free_shipping}/>
                <p>{description}</p>
           </div>           
           <div className={`${styles.item} ${styles.city}`}>
               <p>{city}</p>
           </div>
        </div>
    )
}
