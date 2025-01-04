import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Hiro from "./components/Hiro";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./context/MovieContext";
import Login from "./components/Login";
import ContactUs from "./components/ContactUs";
import ProtectedRoute from "./components/ProtectedRoute";
import Logout from "./components/Logout";
function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const location = useLocation();
  return (
    <MovieProvider>
      {isAuthenticated && location.pathname !== "/login" && <Logout />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <div>
                <Navbar />
                <Hiro />
              </div>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <ContactUs />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </MovieProvider>
  );
}

export default App;
