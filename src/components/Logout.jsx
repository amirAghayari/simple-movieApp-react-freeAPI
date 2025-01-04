import { useNavigate } from "react-router-dom";
import styles from "./Logout.module.css";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <button className={styles.logoutButton} onClick={handleLogout}>
      Log out
    </button>
  );
}

export default Logout;
