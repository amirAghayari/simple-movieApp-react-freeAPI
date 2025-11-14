import { useNavigate } from "react-router-dom";
import styles from "./Logout.module.css";
import { useAuth } from "../context/AuthContext";

function Logout() {
  const navigate = useNavigate();
  const { logout, isAuthenticated } = useAuth();

  if (!isAuthenticated) return null;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <button
      type="button"
      className={styles.logoutButton}
      onClick={handleLogout}
      aria-label="Log-out"
    >
      Log out
    </button>
  );
}

export default Logout;
