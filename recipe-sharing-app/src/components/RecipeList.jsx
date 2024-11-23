import { useRecipeStore } from './recipeStore';
import { Router } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          {/* Link to the recipe details page, if necessary */}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

