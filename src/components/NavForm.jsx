import styles from "./Navbar.module.css";
import Button from "./Button";
import Modal from "./Modal";
import { useState } from "react";
// import SearchBar from "./SearchBar";
import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import { Link } from "react-router-dom";
function NavForm() {
  const [shoeModal, setShowModal] = useState(false);
  const { query, setQuery } = useContext(MovieContext);
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
      <Button>
        <Link to="/login" className={styles.loginLink}>
          Login/Sign In{" "}
        </Link>
      </Button>
      <div className={styles.navSearchContainer}>
        <form>
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
