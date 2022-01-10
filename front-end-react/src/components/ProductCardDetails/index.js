import styles from './styles.module.scss'; 
import { Button } from 'components/Button'
import { Price } from 'components/Price'

export const ProductCardDetails = ({image, description, title, info, price, currency_id, free_shipping}) => {
    return (
        <div className={styles.detailsContainer}>
            <div className={styles.detailItem}>
                <img className={styles.image} src={image} alt='detalle'/>
            </div>
            <div className={styles.detailItem}>
                <p>{info}</p>
                <h1 className={styles.title}>{title}</h1>
                <Price price={price} currency_id={currency_id} free_shipping = {free_shipping}/>
                <Button buttonType='primary' text='Comprar' block/>
            </div>
            <div className={styles.detailItem}>
                <h1>Descripción del producto</h1>
                <p className={styles.description}>
                    {description}
                </p>
            </div>
            <div className={styles.detailItem}>
            </div>
        </div>
    )
}
