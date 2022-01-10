import { Input } from 'antd';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';

import { setValue } from 'services/localStorageServices';
import logo from '../../Assets/Logo_ML.png';
import styles from './styles.module.scss'; 

export const SearchBar = ({placeholder}) => {
    const navigate = useNavigate()
    const { Search } = Input

    const onSearch = (value)=>{
        setValue('searchParam', value)
        navigate(`/items?search=${value}`)
    }

    return ( 
        <nav className={styles.navBar}>
            <img src={logo} alt="meliLatam" className={styles.logo}/>   
            <Search placeholder={placeholder} onSearch={onSearch} className={styles.search} />
        </nav>
    )
}
