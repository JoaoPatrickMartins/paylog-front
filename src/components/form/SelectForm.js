import React from 'react'
import Select from 'react-select'

import styles from './Select.module.css'

function SelectForm ({ text, name, placeholder, option , handleSelectChange }){

    return (
        <div className={styles.form_control} >
            <label htmlFor={name}>{text}</label>
            <Select 
                name={name}
                options={option}  
                placeholder={placeholder}
                onChange={handleSelectChange}
            />
        </div>
    )
}

export default SelectForm