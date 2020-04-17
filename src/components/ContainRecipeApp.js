import React, { useEffect, useState } from 'react';
import Recipes from './Recipes'
import SearchBar from './SearchBar'
import Alert from './Alert'
import { v4 as uuidv4 } from 'uuid';
import styles from './styles/recipes.module.css'


function ContainRecipeApp() {

    const client = {
        APP_ID: process.env.REACT_APP_APP_ID,
        APP_KEY: process.env.REACT_APP_APP_KEY
    }


    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("potato")
    const [alert, setAlert] = useState("")

    const url = `https://api.edamam.com/search?q=${query}&app_id=${client.APP_ID}&app_key=${client.APP_KEY}`


    //if input in [] is left empty, useEffect only runs once on mount rather than on each refresh of useState
    useEffect(() => {
        getRecipes();
    //runs only when submit button is clicked
    }, [query]) 


    //promise
    const getRecipes = async () => {

        if (query !== "") {
            const response = await fetch(url)
            const data = await response.json()

            // 'more' is a true/false value on the fetched recipe object
            if(!data.more) {
                setRecipes([])
                return setAlert("No matches found")
            }

            setRecipes(data.hits)
            setAlert("")
        }

        else {
            setAlert("Please enter an ingredient")
            setRecipes([])
        }

    }


    const updateSearch = (event) => {
    setSearch(event.target.value)
    }


    const getSearch = (event) => {
    //stops refresh
    event.preventDefault()
    //gets finsihed text in input
    setQuery(search)

    setSearch("")
    }


    
      
    return (
        <div>
            <SearchBar 
                search={search}
                updateSearch={updateSearch}
                getSearch={getSearch} 
            />
    

           <Alert alert={alert} query={query} />


            <div className={styles.containerMain}>
                {recipes.map(item => (
                    <Recipes 
                        key={uuidv4()}
                        title={item.recipe.label} 
                        calories={item.recipe.calories} 
                        image={item.recipe.image}
                        ingredients={item.recipe.ingredients} 
                        site={item.recipe.url}
                        serving={item.recipe.yield}
                        
                    />
                ))}
            </div>


            

        </div>
    );
}


export default ContainRecipeApp