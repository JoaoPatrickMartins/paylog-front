import styles from './Input.module.css'

function Input ({ type, text, name, placeholder, handleOnChange, value }){
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input 
                type={type}
                step="any"
                min="0"
                minlength="2"
                maxlength="20"
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}

            ></input>
        </div>
    )
}

export default Input