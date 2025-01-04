import styles from "./Modal.module.css";
function MovieItem({ item }) {
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
      </div>
    </li>
  );
}

export default MovieItem;
