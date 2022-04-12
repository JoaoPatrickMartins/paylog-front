import styles from './Login.module.css'

import Input from '../form/Input'
import SubmitButtonLogin from '../form/SubmitButtonLogin'

import { useState, useContext } from 'react'

import { AuthContext } from '../../context/auth'


function initialState(){
    return { email: '' , password: '' };
}

function Login(){
    const { authenticated, user, login } = useContext(AuthContext);
    const [userAttempt, setUserAttempt] = useState(initialState);

    function onChange(e){
        const { value, name } = e.target;

        setUserAttempt({
            ...userAttempt,
            [name] : value
        });
    }

    async function onSubmit(e){
        e.preventDefault()
        console.log(userAttempt.email, userAttempt.password);
        login(userAttempt.email, userAttempt.password);
        setUserAttempt(initialState);
    }

    return(
        <div className={styles.login_container}>
            <div className={styles.card_login}>
                <h1>Login</h1>
                <p>Insira seu email e senha para acessar</p>
                <p>Authenticated: { JSON.stringify(authenticated) }</p>
                <p>Email: { JSON.stringify(user) }</p>
                <form onSubmit={onSubmit} className={styles.form}>
                    <Input
                         type="email"
                         name="email"
                         placeholder="Endereço de Email"
                         handleOnChange={onChange}
                         value={userAttempt.email}
                    />
                     <Input
                         type="password"
                         name="password"
                         placeholder="Senha"
                         handleOnChange={onChange}
                         value={userAttempt.password}
                         
                    />
                    <SubmitButtonLogin text="Acessar"/>
                </form>
            </div>
        </div>
    )
}

export default Login