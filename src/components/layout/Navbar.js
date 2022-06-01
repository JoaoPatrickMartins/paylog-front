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
                    
                <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} user={user} />
            </Container>     
        </nav>
        </>) : (<></>)}
       </>
        
    )
}

export default NavBar