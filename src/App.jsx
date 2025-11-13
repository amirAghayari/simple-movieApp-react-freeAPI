import { Routes, Route, Navigate } from "react-router-dom";
import Hiro from "./components/Hiro";
import { MovieProvider } from "./context/MovieContext";
import Login from "./components/Login";
import ContactUs from "./components/ContactUs";
import Favorites from "./components/Favorites";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

function App() {
  return (
    <MovieProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout>
                <Hiro />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Layout>
                <Favorites />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Layout>
                <ContactUs />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </MovieProvider>
  );
}

export default App;
