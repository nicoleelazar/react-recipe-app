import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const client = {
    APP_ID: process.env.REACT_APP_APP_ID,
    APP_KEY: process.env.REACT_APP_APP_KEY
  }

  const example = `https://api.edamam.com/search?q=chicken&app_id=${client.APP_ID}&app_key=${client.APP_KEY}`

  //if input in [] is left empty, useEffect only runs once on mount rather than on each refresh of useState
  useEffect(() => {
    getRecipes();
  }, []) 


  //promise
  const getRecipes = async () => {
    const response = await fetch(example)
    const data = await response.json()
    console.log(data)
  }

  
  return (
    <div>
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="serach-button" type="submit">Search</button>
      </form>

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
