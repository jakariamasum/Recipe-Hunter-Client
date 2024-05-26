import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/recipes/${recipeId}`
        );
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe details", error);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-detail container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-auto mb-4"
      />
      <div className="text-gray-600 mb-4">
        <p>Country: {recipe.country}</p>
        <p>Created by: {recipe.creatorEmail}</p>
        <p>Purchased by: {recipe.purchased_by.length}</p>
      </div>
      <div className="video-container mb-4">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${recipe.video}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-gray-600">{recipe.details}</p>
    </div>
  );
};

export default RecipeDetail;
