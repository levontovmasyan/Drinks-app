import React from 'react';

const DrinkCard = ({drinks}) => {
    const {strDrink,strCategory,strDrinkThumb,idDrink} = drinks;
    return (
        <div className='card'>
            <img
              src={strDrinkThumb}
              alt={strDrink}
              className="drink-image"
            />
             <div className='drink-body'>
            <span className ='type'>{strCategory}</span>
            <h3>{strDrink}</h3>
            <a href={"https://www.thecocktaildb.com/drink.php?c=" + idDrink} target="_blank">Ingredients</a>
            </div>
        </div>
       
    )
}

export default  DrinkCard 
