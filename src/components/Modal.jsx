import styles from "./Modal.module.css";
import MovieItem from "./MovieItem";
import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
function Modal({ onclose }) {
  const { query, movie, isLoading, error } = useContext(MovieContext);
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onclose}>
          ❌
        </button>
        <h2 className={styles.titleModal}>{`Search results for : ${query}`}</h2>
        {isLoading && <Loader />}
        {error && <ErrorMessage />}
        {!isLoading && !error && (
          <ul className={styles.ulModal}>
            {movie?.map((item) => (
              <MovieItem item={item} key={item.imdbID} />
            ))}
          </ul>
        )}
        <button onClick={onclose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
