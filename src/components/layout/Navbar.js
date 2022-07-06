import { Link } from "react-router-dom"

import Container from './Container'
import styles from './NavBar.module.css'

import logo from '../../img/logoLinearBranco.png'

import { useContext, useState } from 'react'

import { AuthContext } from '../../context/auth'

import { MenuMobile } from "./MenuMobile"

import { IoMenu,IoChevronBack , IoClose } from 'react-icons/io5'

function NavBar() {
    const { user, logout } = useContext(AuthContext);   
    const [menuIsVisible, setMenuIsVisible] = useState(false); 
    const [plusoptionsIsVisible, setplusOptionsIsVisible] = useState(false) 

    return(
       <>

        {!!user ? (<>
            <nav className={styles.navbar}>
            <Container>
                <div className={styles.container_header}>
                    <div className={styles.container_menu}>
                    {!menuIsVisible && 
                        <IoMenu size={35}  onClick={() => {
                            setMenuIsVisible(true); 
                            window.scrollTo(0, 0);
                        }} />
                    }    
                    {menuIsVisible && 
                        <>
                            {!plusoptionsIsVisible && (
                                <IoClose size={35} onClick={() => {
                                    setMenuIsVisible(false);
                                    setplusOptionsIsVisible(false);
                                }} />
                            )}
                        </>
                    }   
                    
                    {plusoptionsIsVisible && (
                        <IoChevronBack size={35} onClick={() => {
                            setMenuIsVisible(true);
                            setplusOptionsIsVisible(false);
                        }} />
                    )}
                    </div>

                    <div className={styles.container_logo}>
                        <Link to='/' >
                            <img className={styles.logo} src={logo} alt='DigitControl' />
                        </Link>
                    </div>

                    <div className={styles.container_company}>
                        {/*<p>Empresa</p>*/}    
                    </div>
                </div>
                
                <MenuMobile plusoptionsIsVisible={plusoptionsIsVisible} setplusOptionsIsVisible={setplusOptionsIsVisible} menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} user={user} logout={logout} />
            </Container>     
        </nav>
        </>) : (<></>)}
       </>
        
    )
}

export default NavBar