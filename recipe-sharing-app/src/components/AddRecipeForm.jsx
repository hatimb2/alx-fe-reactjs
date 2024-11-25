import React, { useState, useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
  import { useRecipeStore } from './recipeStore';

  const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      addRecipe({ id: Date.now(), title, description });
      setTitle('');
      setDescription('');
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="submit">Add Recipe</button>
      </form>
    );
  };
  
const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  // Populate the form fields with the current recipe data on component mount
  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const updatedRecipe = { ...recipe, title, description };
    useRecipeStore.getState().updateRecipe(updatedRecipe); // Call the updateRecipe action

    navigate(`/recipe/${recipeId}`); // Redirect back to the recipe details page
  };

  // If recipe is not found, display a message
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
