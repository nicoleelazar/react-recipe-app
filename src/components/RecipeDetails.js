import React, {useLayoutEffect} from 'react'
import styles from './styles/recipeDetails.module.css'
import { v4 as uuidv4 } from 'uuid';


export const RecipeDetails = ({title, image, calories, ingredients, site, serving, closeModal}) => {

    //For body scroll bar
    useLayoutEffect(() => {
    
        // Get original value of body overflow
        const originalStyle = window.getComputedStyle(document.body).overflow;  
        // Prevent scrolling on mount
        document.body.style.overflow = 'hidden';

        // Re-enable scrolling when component unmounts
        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, [])
    


    return (

        <div className={styles.modalWrapper}>
            <div className={styles.modalBack} onClick={closeModal}></div>
            <div className={styles.modalBox}>

                <div className={styles.cross} onClick={closeModal} ><i className="fas fa-times"></i></div>


                <div className={styles.flexContainer}>
                    <div className={styles.flexItem}>
                        <div className={styles.imageContainer}>
                            <img className={styles.picture} src={image} alt="food"/>
                        </div>
                        <h1 className={styles.recipeName}>{title}</h1>
                    </div>

                    <div className={styles.flexItem}>
                        <div className={styles.portionInfo}>SERVES: {serving}</div>
                        <div className={styles.portionInfo}>CALORIES: {Math.round(calories)} </div>
                        <hr className={styles.breakLine} />
                        <div className={styles.title}>Ingredients<i className="fas fa-utensils"></i></div>

                       <div className={styles.listContainer}>
                            {ingredients.map(item => (
                                <ul className={styles.ingredientList} key={uuidv4()}>
                                    <li>{item.text}</li>
                                </ul>
                            ))}
                        </div>

                        <a className="button" href={site} target="_blank" rel="noopener noreferrer">Visit Site</a>
                        
                    </div>
                </div>


               
            </div>
        </div>
    )
}

export default RecipeDetails