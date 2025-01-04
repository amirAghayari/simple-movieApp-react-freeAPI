import { useState } from "react";
import styles from "./Hiro.module.css";

function Slides() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className={styles.controlContainer}>
      <div className={styles.bannerControl}>
        <button className={styles.controlLeft} onClick={handlePrev}>
          &lt;
        </button>
        <div className={styles.dots}>
          {[...Array(totalSlides)].map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentSlide ? styles.active : ""
              }`}
            ></span>
          ))}
        </div>
        <button className={styles.controlRight} onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Slides;
