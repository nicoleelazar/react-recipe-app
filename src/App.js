import React, { useEffect, useState } from 'react';
import Recipes from './components/Recipes';
import './App.css';

function App() {

  const client = {
    APP_ID: process.env.REACT_APP_APP_ID,
    APP_KEY: process.env.REACT_APP_APP_KEY
  }


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken")

  const example = `https://api.edamam.com/search?q=${query}&app_id=${client.APP_ID}&app_key=${client.APP_KEY}`


  //if input in [] is left empty, useEffect only runs once on mount rather than on each refresh of useState
  useEffect(() => {
    getRecipes();
    //runs only when submit button is clicked
  }, [query]) 


  //promise
  const getRecipes = async () => {
    const response = await fetch(example)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
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
      <form className="search-form" onSubmit={getSearch} >
        <input className="search-bar" type="text" placeholder="eg. chicken" value={search} onChange={updateSearch} />
        <button className="serach-button" type="submit"  >Search an Ingredient</button>
      </form>

      {recipes.map(item => (
        <Recipes 
          key={item.recipe.label}
          title={item.recipe.label} 
          calories={item.recipe.calories} 
          image={item.recipe.image}
          ingredients={item.recipe.ingredients} />
      ))}

    </div>
  );
}

export default App;


  // eg. for state Hook use  
  // const [counter, setCounter] = useState(0)

  // const incrm = () => {
  //   setCounter(counter + 1)
  // }
  
  {/* <button onClick={incrm}>{counter}</button> */}
