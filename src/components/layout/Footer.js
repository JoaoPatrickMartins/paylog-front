import { FaFacebook, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return(
       <footer className={styles.footer}>
           <ul className={styles.social_list}>
               <li ><FaFacebook /></li>
               <li ><FaLinkedinIn /></li>
               <li ><FaInstagram /></li>
           </ul>
           <p className={styles.copy_right}>
               <span>PayLog</span> &copy; 2022
           </p>
       </footer>
    )
}

export default Footer