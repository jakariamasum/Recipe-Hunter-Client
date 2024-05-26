import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/recipes");
        console.log("API response:", response.data);
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes", error);
      }
    };
    fetchRecipes();
  }, []);

  const handleViewRecipe = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div className="all-recipes container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-4 text-center">All Recipes</h1>
      <div className="grid grid-cols-1 gap-4 justify-items-center">
        {recipes.data &&
          recipes.data.map((recipe) => (
            <div
              key={recipe._id}
              className="card bg-white shadow-md rounded-lg p-4 w-full max-w-md"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{recipe.name}</h2>
                <p className="text-gray-600 mb-2">Country: {recipe.country}</p>
                <p className="text-gray-600 mb-2">
                  Created by: {recipe.creatorEmail}
                </p>
                <p className="text-gray-600 mb-2">
                  Purchased by: {recipe.purchased_by.length}
                </p>
                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => handleViewRecipe(recipe._id)}
                >
                  View The Recipe
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllRecipes;
