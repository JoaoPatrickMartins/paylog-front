import { FaFacebook, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

import styles from './Footer.module.css'

import { useContext } from 'react'

import { AuthContext } from '../../context/auth'


function Footer() {
    const { user } = useContext(AuthContext);

    return(
        <>
            {!!user ? (<>
                <footer className={styles.footer}>
                    <ul className={styles.social_list}>
                        <li ><FaFacebook /></li>
                        <li ><FaLinkedinIn /></li>
                        <li ><FaInstagram /></li>
                    </ul>
                    <p className={styles.copy_right}>
                        Copyright &copy; 2022 <span>Digit Control</span> - Todos direitos reservados.
                    </p>
                </footer>
                </>) : (<></>)}
        </>
    )
}

export default Footer