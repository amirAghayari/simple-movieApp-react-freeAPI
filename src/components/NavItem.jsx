import CategoriesItem from "./CategoriesItem";
import ContactItem from "./ContactItem";
import FilmsItem from "./FilmsItem";
import styles from "./Navbar.module.css";
import SerialsItem from "./SerialsItem";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function NavItemv2() {
  const { favorites = [] } = useFavorites();
  const favCount = Array.isArray(favorites) ? favorites.length : 0;

  return (
    <div className={styles.navUl}>
      <FilmsItem />
      <SerialsItem />
      <CategoriesItem />
      <button className={styles.dropDownButton}>
        <Link to="/favorites" className={styles.contactLink}>
          Favorites {favCount > 0 && <span className={styles.badge}>{favCount}</span>}
        </Link>
      </button>
      <ContactItem />
    </div>
  );
}

export default NavItemv2;
