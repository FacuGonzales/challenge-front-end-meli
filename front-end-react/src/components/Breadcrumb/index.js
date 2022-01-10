import { Breadcrumb as BreadcrumbAnt } from 'antd';
import styles from './styles.module.scss'; 


export const Breadcrumb = ({breadcrumbs}) => {
    return (
        <div className={styles.breadcrumb}>
            <BreadcrumbAnt separator={">"}>
                {breadcrumbs.map(({text, path}) => {
                    console.log(path)
                return <BreadcrumbAnt.Item key={new Date()} href={path}>{text}</BreadcrumbAnt.Item>})}
            </BreadcrumbAnt>
        </div>
    )
}
