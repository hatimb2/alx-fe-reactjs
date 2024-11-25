import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // Existing recipes state
  favorites: [], // Existing favorites state
  recommendations: [], // Existing recommendations state

  // Function to add a new recipe to the store
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

  // Function to set the recipes (this can be used for bulk updating)
  setRecipes: (recipes) => set({ recipes }),

  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  
  // Function to add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),

  // Function to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({ favorites: state.favorites.filter(id => id !== recipeId) })),

  // Function to generate recommendations based on favorites
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe => state.favorites.includes(recipe.id) && Math.random() > 0.5);
    return { recommendations: recommended };
  })
}));

export default useRecipeStore;


