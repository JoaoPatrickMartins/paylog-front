import styles from './Login.module.css'

import Input from '../form/Input'
import SubmitButtonLogin from '../form/SubmitButtonLogin'

import { useState } from 'react'



function initialState(){
    return { email: '' , password: '' };
}

function Login(){

    const [user, setUser] = useState(initialState)

    function onChange(e){
        const { value, name } = e.target;

        setUser({
            ...user,
            [name] : value
        });
    }

    function onSubmit(e){
        e.preventDefault()
        console.log(user.email, user.password)

        setUser(initialState)
    }

    return(
        <div className={styles.login_container}>
            <div className={styles.card_login}>
                <h1>Login</h1>
                <p>Insira seu email e senha para acessar</p>
                <form onSubmit={onSubmit} className={styles.form}>
                    <Input
                         type="email"
                         name="email"
                         placeholder="Endereço de Email"
                         handleOnChange={onChange}
                         value={user.email}
                    />
                     <Input
                         type="password"
                         name="password"
                         placeholder="Senha"
                         handleOnChange={onChange}
                         value={user.password}
                         
                    />
                    <SubmitButtonLogin text="Acessar"/>
                </form>
            </div>
        </div>
    )
}

export default Login