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
    const [query, setQuery] = useState("chocolate")
    const [alert, setAlert] = useState("")

    // for v2 of edamam API
    const url = `https:///api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${client.APP_ID}&app_key=${client.APP_KEY}`

    //if input in [] is left empty, useEffect only runs once on mount rather than on each refresh of useState
    useEffect(() => {
        getRecipes();
        //runs only when submit button is clicked
    }, [query])


    //promise
    const getRecipes = async () => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    return setAlert("There has been an error. Please try again.")
                }
                return response.json()
            })
            .then(data => {
                if (query !== "") {
                    if (data.hits.length === 0) {
                        setRecipes([])
                        return setAlert("No matches found")
                    }
                    else {
                        setRecipes(data.hits)
                        setAlert("")
                    }
                }
                else {
                    setAlert("Please enter an ingredient")
                    setRecipes([])
                }
            })
            .catch(error => {
                setRecipes([])
                return setAlert("There has been an error. Please try again.")
            })
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