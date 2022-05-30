import { Link } from "react-router-dom"

import Container from './Container'
import styles from './NavBar.module.css'

import logo from '../../img/payLog_logo.png'
import { BsFillPersonFill } from "react-icons/bs"

import { useContext } from 'react'

import { AuthContext } from '../../context/auth'

function NavBar() {
    const { user } = useContext(AuthContext);    

    return(
       <>
        {!!user ? (<>
            <nav className={styles.navbar}>
            <Container>
                <Link to='/' >
                    <img src={logo} alt='PayLog' />
                </Link>

                {user ? ( 
                    <ul className={styles.list}>
                        <li className={styles.item}>
                        <Link to="/requestspending">Solicitações Pendentes</Link>
                        </li>
    
                        <li className={styles.item}>
                        <Link to="/requests">Histórico de Solicitações</Link>
                        </li>
    
                        <li className={styles.item}>
                            <Link to="/Contact">Contato</Link>
                        </li>
                    </ul>
                ) : (
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to="/Contact">Contato</Link>
                        </li>
                    </ul>
                )}

                {user && (
                    <div className={styles.user_container}>
                    <Link className={styles.user_options} to='/myaccount'>
                        <p>Olá, {user.first_name}</p>
                        <BsFillPersonFill />
                    </Link>
                 </div>
                )}
                
            </Container>     
        </nav>
        </>) : (<></>)}
       </>
        
    )
}

export default NavBar