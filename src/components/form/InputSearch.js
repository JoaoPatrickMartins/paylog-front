import styles from './InputSearch.module.css'

function InputSearch ({ type, name, placeholder, handleOnChange, value }){
    return (
        <div className={styles.form_control}>
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

export default InputSearch;