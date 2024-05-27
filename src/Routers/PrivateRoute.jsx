import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <button className="btn loading btn-success text-white mt-32 text-center flex justify-center mx-auto">
        loading
      </button>
    );
  }

  if (currentUser?.email) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/" replace></Navigate>;
};

export default PrivateRoute;
