import React from 'react';
import RecipeDetails from './RecipeDetails';
import { v4 as uuidv4 } from 'uuid';
import styles from './styles/recipes.module.css'


export default function recipes(props) {


    return (
        <div>
            
            <div className={styles.tileCard}>
                <div className={styles.containerPicture}>
                    <img className={styles.picture} src={props.image} />
                </div>
                <p className={styles.title}>{props.title}</p>

                <button className="button">See Details</button>
            </div>
           

            {/* <h3>{props.url}</h3> */}
            {/* <a href={props.url} target="_blank">URL</a> */}
            {/* <h4>{props.yield}</h4> */}

            {/* <ul> */}
                {/* use round brackets () after fat arrow if insertinng JSX */}
                {/* {props.ingredients.map((item) => (
                   <li key={uuidv4()} >{item.text}</li> 
                ))} */}
            {/* </ul> */}
            {/* <p>{Math.round(props.calories)}</p> */}
            
        </div>
    )
}
