import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          {/* If navigation is needed, it can be handled in the parent component */}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
