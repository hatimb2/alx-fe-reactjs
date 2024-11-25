import React, { useState } from 'react';
import useRecipeStore from './path-to-your-store'; // Update this with your actual path
import { useNavigate } from 'react-router-dom';

const UpdateRecipeButton = ({ recipeId, updatedRecipeData }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const navigate = useNavigate();

  const handleUpdate = () => {
    // Update the recipe with the new data
    updateRecipe(updatedRecipeData);

    // Navigate to a different page after the update, e.g., the home page
    navigate('/');
  };

  return <button onClick={handleUpdate}>Update Recipe</button>;
};

export default UpdateRecipeButton;
