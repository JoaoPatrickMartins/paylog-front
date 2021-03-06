import styles from './InputLogin.module.css'

function InputLogin ({ type, text, name, placeholder, handleOnChange, value }){
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input 
                type={type}
                step="any"
                min="0"
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
            ></input>
        </div>
    )
}

export default InputLogin