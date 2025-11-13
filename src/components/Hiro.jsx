import { useEffect, useState, useContext } from "react";
import styles from "./Hiro.module.css";
import MovieContext from "../context/MovieContext";

function Hiro() {
  const { heroMovies: movies = [], isLoading, error } = useContext(MovieContext) || {};
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!movies || movies.length === 0) return;
    const id = setInterval(() => setCurrentSlide((s) => (s + 1) % movies.length), 6000);
    return () => clearInterval(id);
  }, [movies]);

  const goToSlide = (index) => setCurrentSlide(index);
  const handlePrev = () => setCurrentSlide((s) => (s - 1 + movies.length) % movies.length);
  const handleNext = () => setCurrentSlide((s) => (s + 1) % movies.length);

  if (isLoading) return <div className={styles.loader}>Loading…</div>;
  if (error) return <div className={styles.error}>Failed to load hero</div>;
  if (!movies || movies.length === 0) return null;

  return (
    <section className={styles.container} role="region" aria-roledescription="carousel" aria-label="نمایش محتوای برگزیده">
      <div className={styles.slider}>
        {movies.map((movie, index) => (
          <article
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
            style={{ backgroundImage: `url(${movie.Background})` }}
            aria-hidden={index !== currentSlide}
            aria-label={`اسلاید ${index + 1} از ${movies.length}`}
          >
            <div className={styles.slideContent}>
              {movie.Poster && (
                <img src={movie.Poster} alt={movie.Title} className={styles.poster} />
              )}
              <div className={styles.details}>
                <h1 className={styles.title}>{movie.Title}</h1>
                {movie.Plot && <p className={styles.plot}>{movie.Plot}</p>}
                <p className={styles.actors}>بازیگران: {movie.Actors}</p>
                <p className={styles.year}>سال: {movie.Year}</p>
                <p className={styles.rating}>رتبه IMDb: {movie.imdbRating}</p>
                <div className={styles.ctaRow}>
                  <button className={styles.ctaPrimary} onClick={handleNext}>مشاهده بعدی</button>
                  <button className={styles.ctaSecondary} onClick={handlePrev}>بازگشت</button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.controls}>
        <button className={styles.controlBtn} aria-label="قبلی" onClick={handlePrev}>‹</button>
        <button className={styles.controlBtn} aria-label="بعدی" onClick={handleNext}>›</button>
      </div>

      <div className={styles.dots} role="tablist" aria-label="ناوبری اسلایدها">
        {movies.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ""}`}
            aria-selected={index === currentSlide}
            aria-label={`رفتن به اسلاید ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Hiro;
