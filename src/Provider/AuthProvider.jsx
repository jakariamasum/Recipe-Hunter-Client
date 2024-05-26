import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useState, useEffect, createContext } from "react";
import app from "../firebase/firebase.config";

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
        };
        setCurrentUser(loggedUser);
        try {
          // Send user data to backend
          const response = await fetch("http://localhost:5000/api/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userData),
          });

          console.log(response);
          if (response.ok) {
            // If user creation on backend is successful, extract and store the authentication token
            const result = await response.json();
            console.log("result", result);
            localStorage.setItem("tokenId", result.authToken);
          } else {
            // If there's an error in creating the user on the backend, handle it
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
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
