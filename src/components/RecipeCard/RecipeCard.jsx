import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{recipe.name}</h3>
      <p className="mb-2">Country: {recipe.country}</p>
      <p className="mb-2">Category: {recipe.category}</p>
      <Link
        to={`/recipe/${recipe._id}`}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        View The Recipe
      </Link>
    </div>
  );
};

export default RecipeCard;
