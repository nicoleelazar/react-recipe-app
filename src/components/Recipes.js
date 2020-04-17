import React, {useState} from 'react';
import RecipeDetails from './RecipeDetails';
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
                
                
            </div>

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
    )
}

export default Recipes