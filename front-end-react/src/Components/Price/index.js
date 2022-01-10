import styles from './styles.module.scss'; 
import {number_format} from 'Utils/index'
import truck_logo from 'Assets/ic_shipping.png'

export const Price = ({price, currency_id, free_shipping}) => {
    console.log('currency_id', currency_id)
    const amount = number_format(price, 2, currency_id)
    console.log('free_shipping',free_shipping)
    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.priceContainer}>
                <span className={styles.prefix}>{amount[0]}</span>{
                amount[1]}
                <span className={styles.cents}>{amount[2]}</span>
                        
            </h1>
            {free_shipping && <span className={styles.shipLogo}><img src={truck_logo} alt='free-shipping'/></span>}  
        </div>
    )
}
