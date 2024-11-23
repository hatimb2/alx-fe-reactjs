import React, { useState, useEffect } from 'react';
import { useRecipeStore } from './recipeStore';  // Assuming Zustand store is in this file
import { useNavigate } from 'react-router-dom';

const EditRecipeForm = ({ recipeId }) => {
  // Retrieve the recipe by its ID from the store
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  // States to manage form data
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  // Populate form fields when the recipe data is loaded
  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission action (page reload)

    const updatedRecipe = { ...recipe, title, description };

    // Call the store's updateRecipe function to update the recipe
    useRecipeStore.getState().updateRecipe(updatedRecipe);

    // Redirect to the recipe details page after updating
    navigate(`/recipe/${recipeId}`);
  };

  // If the recipe is not found, show a message
  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          required
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description"
          required
        />
      </div>

      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;

