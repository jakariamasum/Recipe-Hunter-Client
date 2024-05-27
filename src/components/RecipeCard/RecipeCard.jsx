import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-56 object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-900">
          {recipe.name}
        </h3>
        <p className="text-sm text-gray-700 mb-4">Country: {recipe.country}</p>
        <p className="text-sm text-gray-700 mb-4">
          Category: {recipe.category}
        </p>
        <div className="flex justify-center">
          <Link
            to={`/recipe/${recipe._id}`}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-300 shadow-md"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
