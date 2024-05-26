import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { currentUser, login, logout } = useContext(AuthContext);
  return (
    <nav className=" shadow-lg px-28 bg-orange-400 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">
        <Link to="/">Recipe Hunter</Link>
      </div>
      <div>
        <NavLink to="/all-recipes" className="mr-4">
          All Recipes
        </NavLink>
        {currentUser ? (
          <>
            <NavLink to="/add-recipe" className="mr-4">
              Add Recipe
            </NavLink>
            <NavLink to="/purchase-coins" className="mr-4">
              {currentUser.coin}
            </NavLink>
            <NavLink>{currentUser.displayName}</NavLink>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
