import React from 'react'
import styles from './styles/searchBar.module.css'

// can deconstruct here
export const SearchBar = ({search, updateSearch, getSearch}) => {
    return (
        <div>

            <h1 className={styles.pageHeading}>Recipe Finder</h1>

            <form className={styles.form} onSubmit={getSearch} >
                <input className={styles.bar} type="text" placeholder="Search an Ingredient..." value={search} onChange={updateSearch} />
                <button className={styles.button} type="submit" >Search</button>
            </form>
            
        </div>
    )
}


export default SearchBar