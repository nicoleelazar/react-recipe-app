import React from 'react'

// can deconstruct here
export const SearchBar = ({search, updateSearch, getSearch}) => {
    return (
        <div>

            <form className="search-form" onSubmit={getSearch} >
                <input className="search-bar" type="text" placeholder="eg. chicken" value={search} onChange={updateSearch} />
                <button className="serach-button" type="submit"  >Search an Ingredient</button>
            </form>
            
        </div>
    )
}


export default SearchBar