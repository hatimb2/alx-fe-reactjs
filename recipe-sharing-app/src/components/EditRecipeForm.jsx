import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';
const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
      <EditRecipeForm recipe={recipe}/>
    </div>
  );
};
export default EditRecipeForm