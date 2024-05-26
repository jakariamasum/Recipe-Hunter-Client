import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { currentUser } = useContext(AuthContext);
  const [uploading, setUploading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    if (!currentUser) {
      alert("Please login first");
      return;
    }

    if (!data.image[0]) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", data.image[0]);

    try {
      setUploading(true);
      const imgbbResponse = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.IMG_API}`,
        formData
      );
      const imageUrl = imgbbResponse.data.data.url;

      await axios.post("/api/recipes/add", {
        name: data.name,
        image: imageUrl,
        details: data.details,
        video: data.video,
        country: data.country,
        category: data.category,
        creatorEmail: currentUser.email,
      });

      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Add Recipe</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Recipe Name"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("name", { required: "Recipe name is required" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("image", { required: "Image is required" })}
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Recipe Details"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("details", {
              required: "Recipe details are required",
            })}
          />
          {errors.details && (
            <p className="text-red-500">{errors.details.message}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="YouTube Video Code"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("video")}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Country"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("country", { required: "Country is required" })}
          />
          {errors.country && (
            <p className="text-red-500">{errors.country.message}</p>
          )}
        </div>
        <div className="mb-4">
          <select
            className="w-full p-2 border border-gray-300 rounded"
            {...register("category", { required: "Category is required" })}
          >
            <option value="">Select Category</option>
            <option value="Appetizer">Appetizer</option>
            <option value="Main Course">Main Course</option>
            <option value="Dessert">Dessert</option>
          </select>
          {errors.category && (
            <p className="text-red-500">{errors.category.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Add Recipe"}
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
