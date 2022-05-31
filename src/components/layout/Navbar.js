import { Link } from "react-router-dom"

import Container from './Container'
import styles from './NavBar.module.css'

import logo from '../../img/payLog_logo.png'
import { BsFillPersonFill } from "react-icons/bs"

import { useContext, useState } from 'react'

import { AuthContext } from '../../context/auth'
import { MenuMobile } from "./MenuMobile"

import { IoMenu } from 'react-icons/io5'

function NavBar() {
    const { user } = useContext(AuthContext);   
    const [menuIsVisible, setMenuIsVisible] = useState(false);  

    return(
       <>

        {!!user ? (<>
            <nav className={styles.navbar}>
            <Container>
                <div className={styles.container_menu}>
                    <IoMenu onClick={() => setMenuIsVisible(true)} />

                    <Link to='/' >
                        <img src={logo} alt='PayLog' />
                    </Link>
                </div>

                {/*<ul className={styles.list}>
                    <li>
                        
                    </li>
                    <li className={styles.item}>
                    <Link to="/requestspending">Solicitações Pendentes</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/requests">Histórico de Solicitações</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Contact">Contato</Link>
                    </li>
                    </ul>*/}
                    {user && (
                            <div className={styles.user_container}>
                                <Link className={styles.user_options} to='/myaccount'>
                                    <p>Olá, {user.first_name}</p>
                                    <BsFillPersonFill />
                                </Link>
                            </div>
                    )}
                    <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} user={user} />
            </Container>     
        </nav>
        </>) : (<></>)}
       </>
        
    )
}

export default NavBar