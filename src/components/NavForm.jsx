import styles from "./Navbar.module.css";
import Button from "./Button";
import Modal from "./Modal";
import { useState, useContext } from "react";
import MovieContext from "../context/MovieContext";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavForm() {
  const [shoeModal, setShowModal] = useState(false);
  const { query, setQuery } = useContext(MovieContext);
  const { isAuthenticated } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setQuery("");
  };

  return (
    <div className={styles.navLeft}>
      {!isAuthenticated && (
        <Button>
          <Link to="/login" className={styles.loginLink}>
            Login/Sign In{" "}
          </Link>
        </Button>
      )}
      <div className={styles.navSearchContainer}>
        <form className={styles.navForm}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              className={styles.navSearchInput}
              placeholder="Search movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button className={styles.navSearchButton} onClick={handleSearch}>
            search
          </button>
        </form>
      </div>
      {shoeModal && <Modal onclose={closeModal} />}
    </div>
  );
}

export default NavForm;
