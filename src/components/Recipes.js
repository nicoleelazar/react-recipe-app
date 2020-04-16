import React, {useState} from 'react';
import RecipeDetails from './RecipeDetails';
import { v4 as uuidv4 } from 'uuid';
import styles from './styles/recipes.module.css'



export const Recipes = ({title, image, calories, ingredients, site, serving}) => {

    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

  

    return (
        <div>
                <div className={styles.tileCard}>
                <div className={styles.containerPicture}>
                    <img className={styles.picture} src={image} />
                </div>
                <p className={styles.title}>{title}</p>

                <button className="button" onClick={openModal} >See Details</button>
                
                {modal && <RecipeDetails
                    closeModal={closeModal}
                    title={title}
                    image={image}
                    calories={calories}
                    ingredients={ingredients}
                    site={site}
                    serving={serving} 
                /> }
                    


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

export default Recipes