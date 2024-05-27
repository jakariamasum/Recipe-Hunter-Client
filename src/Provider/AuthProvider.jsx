import { useState, useEffect, createContext } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async () => {
    return signInWithPopup(auth, provider);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (loggedUser) => {
      if (loggedUser) {
        const userData = {
          displayName: loggedUser?.displayName,
          email: loggedUser?.email,
          photoURL: loggedUser?.photoURL,
          coin: 50,
        };
        setCurrentUser(userData);
        try {
          // Send user data to backend
          const response = await axios.post(
            "https://recipe-hunter-server-black.vercel.app/api/users",
            userData
          );
          console.log(response.data.authToken);

          if (response.status === 200) {
            const authToken = response.data.authToken;
            localStorage.setItem("authorization", "Bears " + authToken);
            // Show toast notification
            toast.success(`Welcome ${userData.displayName}`);
          } else {
            console.error("Failed to create user on backend");
          }
        } catch (error) {
          console.error("Error while communicating with backend:", error);
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      <ToastContainer />
      {!loading && children}
    </AuthContext.Provider>
  );
}
