import React from 'react'
import Select from 'react-select'

import styles from './Select.module.css'

function SelectOrigin ({ text, name, placeholder, handleSelectChange }){
    const options = [
        { value: 'Banco', label: 'Banco' },
        { value: 'Caixa', label: 'Caixa' },
      ]

      

    return (
        <div className={styles.form_control} >
            <label htmlFor={name}>{text}</label>
            <Select 
                className={styles.select_style}
                name={name}
                options={options}  
                placeholder={placeholder}
                onChange={handleSelectChange}
            />
        </div>
    )
}

export default SelectOrigin