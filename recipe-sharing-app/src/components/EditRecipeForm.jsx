import { Link } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useRecipeStore } from './recipeStore';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <Link to={`/edit/${recipe}`}>Edit Recipe</Link>
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
      <DeleteRecipeButton recipe={recipe} />
    </div>
  );
};

export default EditRecipeForm
