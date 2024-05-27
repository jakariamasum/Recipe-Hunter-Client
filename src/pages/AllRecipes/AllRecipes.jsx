import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import { FaCoins, FaGlobe, FaUser, FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const AllRecipes = () => {
  const id = useParams();
  console.log(id);
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";

  const [categoryFilter, setCategoryFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchRecipes();
  }, [categoryFilter, countryFilter, searchQuery]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(
        "https://recipe-hunter-server-black.vercel.app/api/recipes",
        {
          params: {
            category: categoryFilter,
            country: countryFilter,
            name: searchQuery,
          },
        }
      );
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes", error);
    }
  };

  const handleViewRecipe = async (recipe) => {
    if (!currentUser) {
      toast.error("Please log in to view this recipe");
      return;
    }

    if (currentUser.email === recipe.creatorEmail) {
      navigate(`/recipe/${recipe._id}`);
      return;
    }

    if (currentUser.coin < 10) {
      toast.error(
        "You do not have enough coins to view this recipe. Please purchase more coins."
      );
      navigate("/purchase-coin");
      return;
    }

    if (recipe.purchased_by.includes(currentUser.email)) {
      navigate(`/recipe/${recipe._id}`);
      return;
    }

    Swal.fire({
      title: "Confirm Purchase",
      text: "Are you sure you want to spend 10 coins to view this recipe?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, purchase it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const updatedUser = { ...currentUser };
          updatedUser.coin -= 10;
          setCurrentUser(updatedUser);
          const getRecipe = await axios.get(
            `https://recipe-hunter-server-black.vercel.app/api/recipes/${recipe._id}`,
            {
              headers: {
                authorization: `${localStorage.getItem("authorization")}`,
              },
              params: {
                email: currentUser.email,
              },
            }
          );
          console.log(getRecipe);

          toast.success("You have successfully purchased the recipe!");
          navigate(`/recipe/${recipe._id}`);
        } catch (error) {
          console.error("Error purchasing recipe:", error);
          toast.error("Failed to purchase recipe. Please try again later.");
        }
      }
    });
  };
  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleCountryFilterChange = (event) => {
    setCountryFilter(event.target.value);
  };
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="all-recipes container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-4 text-center">All Recipes</h1>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search by recipe title..."
          className="px-4 py-2 border rounded"
        />
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <select
          value={categoryFilter}
          onChange={handleCategoryFilterChange}
          className="px-4 py-2 border rounded"
        >
          <option value="">All Categories</option>
          <option value="pasta">Pasta</option>
          <option value="desart">Desart</option>
          <option value="beef">Beef</option>
          <option value="chicken">Chicken</option>
          <option value="fish">Fish</option>
        </select>
        <select
          value={countryFilter}
          onChange={handleCountryFilterChange}
          className="px-4 py-2 border rounded"
        >
          <option value="">All Countries</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Thailand">Thailand</option>
          <option value="Italy">Italy</option>
          <option value="Japan">Japani</option>
          <option value="China">Chiness</option>
        </select>
      </div>
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
                className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
                onClick={() => handleViewRecipe(recipe)}
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{recipe.name}</h2>
                <p className="text-gray-600 mb-2">
                  <FaGlobe className="inline-block mr-2" />
                  Country: {recipe.country}
                </p>
                <p className="text-gray-600 mb-2">
                  <FaUser className="inline-block mr-2" />
                  Created by: {recipe.creatorEmail}
                </p>
                <p className="text-gray-600 mb-2">
                  <FaShoppingCart className="inline-block mr-2" />
                  Purchased by: {recipe.purchased_by.length}
                </p>
                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => handleViewRecipe(recipe)}
                >
                  <FaCoins className="inline-block mr-2" />
                  View The Recipe
                </button>
              </div>
            </div>
          ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default AllRecipes;
