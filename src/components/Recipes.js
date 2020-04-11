import React from 'react'


export default function recipes(props) {


    return (
        <div>
            <h1>{props.title}</h1>
            <ul>
                {props.ingredients.map(item => (
                   <li>{item.text}</li> 
                ))}
            </ul>
            <p>{Math.round(props.calories)}</p>
            <img src={props.image} />
            
        </div>
    )
}
