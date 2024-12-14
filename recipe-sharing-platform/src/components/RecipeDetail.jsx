import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe id from the URL
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Find the recipe with the matching id
    const selectedRecipe = recipeData.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  // Redirect if the recipe is not found
  if (!recipe) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        <p>Recipe not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
      >
        Back to Home
      </button>
      
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6">
        <img
          className="w-full md:w-1/2 h-64 object-cover rounded-lg"
          src={recipe.image}
          alt={recipe.title}
        />
        <div className="md:ml-6 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold">{recipe.title}</h1>
          <p className="text-lg text-gray-600 mt-2">{recipe.summary}</p>
          
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Ingredients:</h2>
            <ul className="list-disc pl-5 mt-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Cooking Instructions:</h2>
            <ol className="list-decimal pl-5 mt-2">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="text-gray-700">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
