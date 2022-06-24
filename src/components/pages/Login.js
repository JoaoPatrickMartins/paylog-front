import styles from './Login.module.css'

import InputLogin from '../form/InputLogin'
import SubmitButtonLogin from '../form/SubmitButtonLogin'

import logo from '../../img/Logo_Branco_Digit_Control.svg'

import { useState, useContext } from 'react'

import { AuthContext } from '../../context/auth'

import { Link, Navigate } from 'react-router-dom'


function initialState(){
    return { email: '' , password: '' };
}

function Login(){
    const {  login, user } = useContext(AuthContext);
    const [userAttempt, setUserAttempt] = useState(initialState);
    const [errorMsg, setErrorMsg] = useState(false)

    function onChange(e){
        const { value, name } = e.target;

        setUserAttempt({
            ...userAttempt,
            [name] : value
        });
    }

    async function onSubmit(e){
        e.preventDefault()
        login(userAttempt.email, userAttempt.password, setErrorMsg);
    }

    return(

        <>
            {!!user ? (
                <Navigate to='/' />
            ) : (
                <div className={styles.login_container}>
                    <div className={styles.card_login}>
                        <img src={logo} alt='DigitControl'/>
                            <form onSubmit={onSubmit} className={styles.form}>
                                <InputLogin
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    handleOnChange={onChange}
                                    value={userAttempt.email}
                                />
                                <InputLogin
                                    type="password"
                                    name="password"
                                    placeholder="Senha"
                                    handleOnChange={onChange}
                                    value={userAttempt.password}
                                />
                                <div className={styles.msg_container}>
                                    {errorMsg && (
                                        <p>Usuário ou Senha inválido</p>
                                    )}
                                </div>
                                <SubmitButtonLogin text="Acessar"/>
                            </form>  
                            <Link to='/contact' className={styles.link_button}>Esqueceu sua senha?</Link>
                            <p className={styles.copy_right}>
                                Copyright &copy; 2022 <span>Digit Control</span> - Todos direitos reservados.
                            </p>                       
                    </div>
                </div>
            )}  
        </>
    )
}

export default Login