import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.VITE_PROJECT_ID,
  storageBucket: import.meta.VITE_ST0RAGE_BUCKET,
  messagingSenderId: import.meta.VITE_MESSAGING_ID,
  appId: import.meta.VITE_API_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
