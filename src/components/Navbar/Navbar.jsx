import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { currentUser, login, logout } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="shadow-lg lg:px-28 bg-[#E8604C] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">Recipe Hunter</Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="block text-white hover:text-white focus:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16a1 1 0 100-2H4a1 1 0 100 2zm16 6H4a1 1 0 110-2h16a1 1 0 110 2zm0 6H4a1 1 0 110-2h16a1 1 0 110 2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16a1 1 0 100-2H4a1 1 0 100 2zm0 6h16a1 1 0 100-2H4a1 1 0 100 2zm0 6h16a1 1 0 100-2H4a1 1 0 100 2z"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:w-auto w-full`}
        >
          <div className="lg:flex lg:items-center lg:mr-4">
            <NavLink
              to="/all-recipes"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Recipes
            </NavLink>
            {currentUser && (
              <>
                <NavLink
                  to="/add-recipe"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Add Recipe
                </NavLink>
                <NavLink
                  to="/purchase-coins"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Purchase
                </NavLink>
              </>
            )}
          </div>
          <div className="flex items-center">
            {currentUser ? (
              <>
                <NavLink
                  to="#"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                >
                  {currentUser.coin}
                </NavLink>
                <NavLink
                  to="#"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                >
                  {currentUser.displayName}
                </NavLink>
                <button
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
                onClick={login}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
