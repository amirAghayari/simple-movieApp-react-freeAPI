import { useState, useEffect } from "react";
import styles from "./Hiro.module.css";

const movies = [
  {
    Title: "Gladiator",
    Background: "https://images7.alphacoders.com/674/674297.jpg",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    Plot: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    Actors: "Russell Crowe, Joaquin Phoenix, Connie Nielsen",
    Year: "2000",
    imdbRating: "8.5",
  },
  {
    Title: "Inception",
    Background:
      "https://cdn.suwalls.com/wallpapers/movies/inception-43752-1920x1080.jpg",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    Plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
    Year: "2010",
    imdbRating: "8.8",
  },
  {
    Title: "The Dark Knight",
    Background:
      "https://wallpapers-clan.com/wp-content/uploads/2023/10/batman-bats-in-night-city-desktop-wallpaper-preview.jpg",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    Plot: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
    Year: "2008",
    imdbRating: "9.0",
  },
];

function Hiro() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % movies.length);
      console.log("Current Slide Index:", (currentSlide + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]); // اضافه کردن currentSlide به dependency array

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        {movies.map((movie, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${movie.Background})` }}
          >
            <div className={styles.slideContent}>
              <img
                src={movie.Poster}
                alt={movie.Title}
                className={styles.poster}
              />
              <div className={styles.details}>
                <h1 className={styles.title}>{movie.Title}</h1>
                <p className={styles.plot}>{movie.Plot}</p>
                <p className={styles.actors}>Actors: {movie.Actors}</p>
                <p className={styles.year}>Year: {movie.Year}</p>
                <p className={styles.rating}>IMDb Rating: {movie.imdbRating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {movies.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.activeDot : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Hiro;
