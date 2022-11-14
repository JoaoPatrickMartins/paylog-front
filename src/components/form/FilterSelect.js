import React from 'react'
import Select from 'react-select'

import styles from './FilterSelect.module.css'

function FilterSelect ({ text, name, placeholder, option , handleSelectChange }){

    return (
        <div className={styles.form_control} >
            <Select 
                name={name}
                options={option}  
                placeholder={placeholder}
                onChange={handleSelectChange}
            />
        </div>
    )
}

export default FilterSelect