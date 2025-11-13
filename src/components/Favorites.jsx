import { useFavorites } from "../context/FavoritesContext";
import styles from "./Modal.module.css";

function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  if (!favorites.length)
    return <div style={{ padding: 20, color: "#fff" }}>No favorites yet.</div>;

  return (
    <ul className={styles.ulModal} style={{ padding: 20 }}>
      {favorites.map((item) => (
        <li key={item.imdbID} className={styles.listItem}>
          <img src={item.Poster} alt={item.Title} className={styles.picModal} />
          <div>
            <h3>{item.Title}</h3>
            <p>
              <span>{item.Year}</span>
            </p>
            <button
              onClick={() => removeFavorite(item.imdbID)}
              className={styles.closeButton}
            >
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Favorites;