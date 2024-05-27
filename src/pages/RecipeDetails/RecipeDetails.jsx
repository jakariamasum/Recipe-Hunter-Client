import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  FaGlobe,
  FaUser,
  FaShoppingBag,
  FaPlay,
  FaListUl,
} from "react-icons/fa";
import "./Recipe.css";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://recipe-hunter-server-black.vercel.app/api/recipes/recipe/${id}`,
          {
            headers: {
              authorization: `${localStorage.getItem("authorization")}`,
            },
          }
        );
        setRecipe(response.data.data);

        if (response.data.data.category) {
          const suggestedResponse = await axios.get(
            `https://recipe-hunter-server-black.vercel.app/api/recipes?category=${response.data.data.category}`
          );
          setSuggestedRecipes(suggestedResponse.data);
        } else if (response.data.data.country) {
          const suggestedResponse = await axios.get(
            `https://recipe-hunter-server-black.vercel.app/api/recipes?country=${response.data.data.country}`
          );
          setSuggestedRecipes(suggestedResponse.data);
        }
      } catch (error) {
        console.error("Error fetching recipe details", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="recipe-detail container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-64 md:h-80 object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full p-4 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {recipe.name}
            </h1>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recipe Details */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                <FaGlobe className="inline-block mr-2 text-blue-500" />
                Recipe Details
              </h2>
              <p className="mb-2">
                <FaGlobe className="inline-block mr-2 text-blue-500" />
                <strong>Country:</strong> {recipe.country}
              </p>
              <p className="mb-2">
                <FaUser className="inline-block mr-2 text-blue-500" />
                <strong>Created by:</strong> {recipe.creatorEmail}
              </p>
              <p className="mb-2">
                <FaShoppingBag className="inline-block mr-2 text-blue-500" />
                <strong>Purchased by:</strong> {recipe.purchased_by?.length}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">
                  <FaPlay className="inline-block mr-2 text-red-500" />
                  Video Tutorial
                </h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={`https://www.youtube.com/embed/${recipe.video}`}
                    title="YouTube video player"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">
              <FaListUl className="inline-block mr-2 text-green-500" />
              Instructions
            </h2>
            <p className="text-lg text-gray-700">{recipe.details}</p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Suggested Recipes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestedRecipes.data &&
                suggestedRecipes.data.map((recipe) => (
                  <div key={recipe._id}>
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <h3 className="text-lg font-semibold mt-2">
                      {recipe.name}
                    </h3>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
