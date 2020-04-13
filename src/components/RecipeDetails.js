import React from 'react'
import Logo from './testpic.png'

export default function RecipeDetails() {
    return (

        <div className="modal-wrapper">
            <div className="modal-back"></div>
            <div className="modal-box">

                <div className="cross"><i className="fas fa-times"></i></div>

                <div className="flex-container">
                    <div className="flex-item">
                        <div className="image-container">
                            <img className="picture" src={Logo} alt=""/>
                        </div>
                        <h1 className="recipe-name">Chicken Pie</h1>
                    </div>

                    <div className="flex-item">
                        <div className="portion-info">SERVES: 4 People</div>
                        <div className="portion-info">CALORIES: 150</div>
                        <hr className="break-line" />
                        <div className="title">Ingredients<i className="fas fa-utensils"></i></div>
                        <ul className="ingredient-list">
                            <li>Item 1</li>
                            <li>Item 2</li>
                        </ul>
                        <a className="button" href="/" target="_blank" rel="noopener noreferrer">Visit Site</a>
                        
                    </div>
                </div>


               
            </div>
        </div>
    )
}
