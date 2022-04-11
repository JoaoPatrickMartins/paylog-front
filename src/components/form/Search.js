import React, { useState } from "react"

import styles from "./Search.module.css"

import InputSearch from "./InputSearch"

import { BsSearch } from "react-icons/bs"

function Search({onSearch}){
    const [query, setQuery] = useState('')

    function handleChange(e){
        setQuery({ ...query, [e.target.name]: e.target.value })
    }

    return(
    <div className={styles.search}>
        <InputSearch 
            type="search" 
            name="query" 
            value={query}
            handleOnChange={ handleChange }
            placeholder="Pesquisar" 
        />
        <button 
             onClick={onSearch} 
             className={styles.btnSearch}>
             <BsSearch className={styles.btnSvg}/>
        </button>
    </div>)
}

export default Search;