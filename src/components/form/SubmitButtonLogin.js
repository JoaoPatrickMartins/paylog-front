import styles from './SubmitButtonLogin.module.css'

function SubmitButtonLogin ({ text }){
    return (
        <button className={styles.btn}>{text}</button>
    )
}

export default SubmitButtonLogin