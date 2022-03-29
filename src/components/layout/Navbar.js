import { Link } from "react-router-dom"

import Container from './Container'
import styles from './NavBar.module.css'

import logo from '../../img/payLog_logo.png'
import { BsFillPersonFill } from "react-icons/bs"
import LogoutButton from "../ui/LogoutButton"


function NavBar() {
    
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
                            <p>User name</p>
                            <BsFillPersonFill />
                            <LogoutButton/>
                        </Link>
                    </div>
            </Container>     
        </nav>
    )
}

export default NavBar