import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'
import { IoCreate } from'react-icons/io5'


function LinkButton({to , text}){
    return(
        <Link className={styles.btn} to={to}>
            <IoCreate />
            {text}
        </Link>
    )
}
export default LinkButton