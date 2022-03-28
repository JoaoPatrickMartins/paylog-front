import { Link } from "react-router-dom"

import Container from './Container'
import styles from './NavBar.module.css'

import logo from '../../img/payLog_logo.png'
import { BsFillPersonFill } from "react-icons/bs"
import ButtonLogout from "../ui/ButtonLogout"

import { useContext } from 'react'

import StoreContext from '../store/Context'

function NavBar() {
    const { token } = useContext(StoreContext)
    
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to='/' >
                    <img src={logo} alt='PayLog' />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>

                    <li className={styles.item}>
                      <Link to="/requests">Solicitações</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to="/Contact">Contato</Link>
                    </li>
                </ul>
                <div>
                        <Link className={styles.user_container} to='/login'>
                            {token === null ? <p>Fazer Login</p> : <p>UserName</p>}
                            <BsFillPersonFill />
                        </Link>
                        <ButtonLogout/>
                    </div>
            </Container>     
        </nav>
    )
}

export default NavBar