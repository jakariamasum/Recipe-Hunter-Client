import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        `https://api.imgbb.com/1/upload?key=ee74842f81f029fb9561e589c2fe6b60`,
        formData
      );
      const imageUrl = imgbbResponse.data.data.url;

      await axios.post(
        "https://recipe-hunter-server-black.vercel.app/api/recipes",
        {
          name: data.name,
          image: imageUrl,
          details: data.details,
          video: data.video,
          country: data.country,
          category: data.category,
          creatorEmail: currentUser.email,
        }
      );

      // Show success toast
      toast.success("Success Notification !", {
        position: "top-center",
      });

      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Add Recipe</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Recipe Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            {...register("name", { required: "Recipe name is required" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <input
            type="file"
            accept="image/*"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            {...register("image", { required: "Image is required" })}
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Recipe Details"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
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
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            {...register("video")}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Country"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            {...register("country", { required: "Country is required" })}
          />
          {errors.country && (
            <p className="text-red-500">{errors.country.message}</p>
          )}
        </div>
        <div className="mb-4">
          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            {...register("category", { required: "Category is required" })}
          >
            <option value="">Select Category</option>
            <option value="pasta">Pasta</option>
            <option value="beef">Beef</option>
            <option value="chicken">Chicken</option>
            <option value="desart">Desart</option>
            <option value="fish">Fish</option>
          </select>
          {errors.category && (
            <p className="text-red-500">{errors.category.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-lg p-3 font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Add Recipe"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddRecipe;
