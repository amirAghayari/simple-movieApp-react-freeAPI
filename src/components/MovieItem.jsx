import styles from "./Modal.module.css";
import { useFavorites } from "../context/FavoritesContext";

function MovieItem({ item }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(item.imdbID);

  const toggleFavorite = () => {
    if (favorite) removeFavorite(item.imdbID);
    else addFavorite(item);
  };

  return (
    <li key={item.imdbID} className={styles.listItem}>
      <img
        src={item.Poster}
        className={styles.picModal}
        alt={`${item.Title} poster`}
      />
      <div>
        <h3>{item.Title}</h3>
        <div>
          <p>
            <span>{item.Year}</span>
          </p>
        </div>
        <button className={styles.closeButton} onClick={toggleFavorite}>
          {favorite ? "Remove" : "Add"}
        </button>
      </div>
    </li>
  );
}

export default MovieItem;
