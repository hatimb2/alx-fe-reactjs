import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch the recipes from a local JSON file or mock data
    const fetchData = async () => {
      const data = await fetch('/data.json');  // Adjust the path if necessary
      const recipes = await data.json();
      setRecipes(recipes);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <img className="w-full h-48 object-cover" src={recipe.image} alt={recipe.title} />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>
              <Link
                to={`/recipe/${recipe.id}`}
                className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-200"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
