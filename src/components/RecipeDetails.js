import React from 'react'
import styles from './styles/recipeDetails.module.css'
// import Logo from './testpic.png'

export const RecipeDetails = ({title, image, calories, ingredients, site, serving, closeModal}) => {
    return (

        <div className={styles.modalWrapper}>
            <div className={styles.modalBack}></div>
            <div className={styles.modalBox}>

                <div className={styles.cross} onClick={closeModal} ><i className="fas fa-times"></i></div>


                <div className={styles.flexContainer}>
                    <div className={styles.flexItem}>
                        <div className={styles.imageContainer}>
                            <img className={styles.picture} src={image} alt="food image"/>
                        </div>
                        <h1 className={styles.recipeName}>{title}</h1>
                    </div>

                    <div className={styles.flexItem}>
                        <div className={styles.portionInfo}>SERVES: {serving}</div>
                        <div className={styles.portionInfo}>CALORIES: {Math.round(calories)} </div>
                        <hr className={styles.breakLine} />
                        <div className={styles.title}>Ingredients<i className="fas fa-utensils"></i></div>
                        <ul className={styles.ingredientList}>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 2</li>
                            <li>Item 2</li>
                            <li>Item 2</li>
                            <li>Item 2</li>
                            <li>Item 2</li>
                            <li>Item 2</li>
                            <li>Item 2</li>
                        </ul>
                        <a className="button" href={site} target="_blank" rel="noopener noreferrer">Visit Site</a>
                        
                    </div>
                </div>


               
            </div>
        </div>
    )
}

export default RecipeDetails