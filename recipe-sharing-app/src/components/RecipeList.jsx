import React from 'react';
import { Link } from 'react-router-dom'; 
import { useRecipeStore } from './recipeStore'; 

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          {/* Use Link to navigate to a recipe's detail page */}
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
