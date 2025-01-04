import styles from "./Hiro.module.css";
import MovieContext from "../context/MovieContext";
import { useContext } from "react";
function ErrorMessage() {
  const { error } = useContext(MovieContext);
  return <p className={styles.error}>{error}</p>;
}

export default ErrorMessage;
