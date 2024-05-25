import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const user = false;
  return (
    <nav className=" shadow-lg px-28 bg-orange-400 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">
        <Link to="/">Recipe Hunter</Link>
      </div>
      <div>
        <NavLink
          to="/all-recipes"
          className="mr-4"
          activeClassName="text-yellow-200"
        >
          All Recipes
        </NavLink>
        {user ? (
          <>
            <NavLink
              to="/add-recipe"
              className="mr-4"
              activeClassName="text-yellow-200"
            >
              Add Recipe
            </NavLink>
            <NavLink
              to="/purchase-coins"
              className="mr-4"
              activeClassName="text-yellow-200"
            >
              Coins 10
            </NavLink>
            <button>Logout</button>
          </>
        ) : (
          <button>Login with Google</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
