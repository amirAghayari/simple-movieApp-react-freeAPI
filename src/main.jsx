import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoritesContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <FavoritesProvider>
        <Router>
          <App />
        </Router>
      </FavoritesProvider>
    </AuthProvider>
  </StrictMode>
);
