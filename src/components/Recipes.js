import React from 'react'


export default function recipes(props) {


    return (
        <div>
            <h1>{props.title}</h1>
            <ul>
                {/* use round brackets () after fat arrow if insertinng JSX */}
                {props.ingredients.map((item, index) => (
                   <li key={index} >{item.text}</li> 
                ))}
            </ul>
            <p>{Math.round(props.calories)}</p>
            <img src={props.image} />
            
        </div>
    )
}
