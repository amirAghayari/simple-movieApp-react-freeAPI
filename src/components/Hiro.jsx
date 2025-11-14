import { useEffect, useState, useContext } from "react";
import styles from "./Hiro.module.css";
import MovieContext from "../context/MovieContext";

function Hiro() {
  const {
    heroMovies: movies = [],
    isLoading,
    error,
  } = useContext(MovieContext) || {};
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fixed: Added proper cleanup and dependency array
  useEffect(() => {
    if (!movies || movies.length === 0) return;

    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % movies.length);
    }, 6000);

    // Cleanup function to prevent memory leaks
    return () => clearInterval(slideInterval);
  }, [movies]); // Added movies as dependency

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + movies.length) % movies.length
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % movies.length);
  };

  // Loading state
  if (isLoading) return <div className={styles.loader}>Loading…</div>;

  // Error state
  if (error)
    return <div className={styles.error}>Failed to load hero content</div>;

  // Empty state
  if (!movies || movies.length === 0) return null;

  return (
    <section
      className={styles.container}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured content slider"
    >
      <div className={styles.slider}>
        {movies.map((movie, index) => (
          <article
            key={movie.id || index} // Fixed: Use movie.id if available, fallback to index
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            }`}
            style={{
              backgroundImage: `url(${movie.Background})`,
              // Fixed: Added background styles for better UX
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden={index !== currentSlide}
            aria-label={`Slide ${index + 1} of ${movies.length}`}
          >
            <div className={styles.slideContent}>
              {movie.Poster && (
                <img
                  src={movie.Poster}
                  alt={`${movie.Title} poster`} // Fixed: Better alt text
                  className={styles.poster}
                  loading="lazy" // Added for performance
                />
              )}
              <div className={styles.details}>
                <h1 className={styles.title}>{movie.Title}</h1>
                {movie.Plot && <p className={styles.plot}>{movie.Plot}</p>}
                <p className={styles.actors}>Cast: {movie.Actors}</p>
                <p className={styles.year}>Year: {movie.Year}</p>
                <p className={styles.rating}>IMDb Rating: {movie.imdbRating}</p>
                <div className={styles.ctaRow}>
                  {/* Fixed: Changed button labels to English */}
                  <button className={styles.ctaPrimary} onClick={handleNext}>
                    Next Slide
                  </button>
                  <button className={styles.ctaSecondary} onClick={handlePrev}>
                    Previous Slide
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.controls}>
        <button
          className={styles.controlBtn}
          aria-label="Previous slide"
          onClick={handlePrev}
        >
          ‹
        </button>
        <button
          className={styles.controlBtn}
          aria-label="Next slide"
          onClick={handleNext}
        >
          ›
        </button>
      </div>

      <div className={styles.dots} role="tablist" aria-label="Slide navigation">
        {movies.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.activeDot : ""
            }`}
            aria-selected={index === currentSlide}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            role="tab"
          />
        ))}
      </div>
    </section>
  );
}

export default Hiro;
