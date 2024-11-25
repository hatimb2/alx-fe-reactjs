import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // Stores the list of all recipes
  favorites: [], // Stores the list of favorite recipe IDs
  recommendations: [], // Stores recommended recipes
  searchTerm: '', // Stores the search term
  filteredRecipes: [], // Stores the filtered recipes based on the search term

  // Function to add a new recipe to the store
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe]
  })),

  // Function to set recipes (bulk updating)
  setRecipes: (recipes) => set({ recipes }),

  // Function to update a recipe by its ID
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),

  // Function to delete a recipe by its ID
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId) // Removes the recipe with the given id
  })),

  // Function to add a recipe to favorites
  addFavorite: (recipeId) => set(state => {
    // Avoid duplicates by checking if the recipe is already in favorites
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
    return state; // Return unchanged state if recipe is already in favorites
  }),

  // Function to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Function to generate recommendations based on favorites
  generateRecommendations: () => set(state => {
    // Generate recommendations from recipes that are in favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // Function to set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Function to filter recipes based on the search term
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  }))
}));

export default useRecipeStore;
