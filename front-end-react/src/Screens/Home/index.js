import logo from 'Assets/Logo_ML@2x.png.png'
import styles from './styles.module.scss'; 


export const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.message}>
                <img src={logo} alt="a" />
                <h1>Encontrá eso que estás buscando</h1>
            </div>
        </div>
    )
}
