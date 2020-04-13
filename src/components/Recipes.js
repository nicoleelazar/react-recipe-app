import React from 'react';
import RecipeDetails from './RecipeDetails';
import { v4 as uuidv4 } from 'uuid';


export default function recipes(props) {


    return (
        <div>
            <h1>{props.title}</h1>

            <h3>{props.url}</h3>
            <a href={props.url} target="_blank">URL</a>
            <h4>{props.yield}</h4>

            {/* <ul> */}
                {/* use round brackets () after fat arrow if insertinng JSX */}
                {/* {props.ingredients.map((item) => (
                   <li key={uuidv4()} >{item.text}</li> 
                ))} */}
            {/* </ul> */}
            <p>{Math.round(props.calories)}</p>
            <img src={props.image} />
            
        </div>
    )
}
