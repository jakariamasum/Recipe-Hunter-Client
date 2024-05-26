import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home/Home";
import Main from "../Layout/Main/Main";
import AddRecipe from "../pages/AddRecipe/AddRecipe";
import AllRecipes from "../pages/AllRecipes/AllRecipes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-recipe",
        element: <AddRecipe />,
      },
      {
        path: "/all-recipes",
        element: <AllRecipes />,
      },
    ],
  },
]);
