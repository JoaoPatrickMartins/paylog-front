import LogoutButton from "../layout/LogoutButton"

import styles from "./MyAccount.module.css"

import { useContext } from "react";

import { IoPersonCircle } from "react-icons/io5"

import { AuthContext } from "../../context/auth"

function MyAccount() {
    const { user } = useContext(AuthContext);

    return (
        <div className={styles.profile_container}>
            <div className={styles.card_profile}>
                <div>
                    <div className={styles.icon_container}>
                        <div className={styles.background_icon}>
                            <IoPersonCircle />
                        </div>
                    </div>
                    <h1>Minha Conta</h1>
                    <div className={styles.info_profile}>
                        <p><span>Nome: </span> {user.first_name} {user.last_name}</p>
                        <p><span>Cargo: </span> {user.job_position}</p>
                        <p><span>Empresa: </span> {user.company}</p>
                        <p><span>Email: </span> {user.email}</p>   
                    </div>  
                    <div className={styles.button_container}>
                            <LogoutButton className={styles.logout_button} />
                    </div> 
                </div>            
            </div>
            
        </div>
    )
}

export default MyAccount;