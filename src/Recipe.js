import React from 'react';
// @ts-ignore
import './recipe-module.css';
const Recipe =({title,calories,image,ingredients,totalTime}) =>{
    return(
        <div className='recipe'>
            <h1 >{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>
                        {ingredient.text}  ({ingredient.weight})
                    </li>
                ))}
            </ol>
            <p>Calories : {calories} </p>   
            <p>TotalTime : {totalTime}</p>
            <img src={image} className='image'></img>
        </div>
    );
}
export default Recipe;