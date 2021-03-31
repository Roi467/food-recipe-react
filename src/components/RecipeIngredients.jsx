import React from "react";

const RecipeIngredients = ({ ingredients }) => {
  return (
    <div className="ingredient-list-warp">
      {ingredients.map((ingredient, index) => {
        const key = `ingredient-${index}`;
        return (
          <ul key={key} className="ingredient-list">
            <li className="ingredient-text">{ingredient.text}</li>
            <li className="ingredient-weight">Weight - {ingredient.weight}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default RecipeIngredients;
