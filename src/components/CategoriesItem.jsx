import { useState } from "react";
import styles from "./Navbar/Navbar.module.css";
function CategoriesItem() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = function () {
    setIsOpen(true);
    console.log("Hello");
  };

  const handleMouseLeave = function () {
    setIsOpen(false);
  };
  return (
    <div
      className={styles.dropDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className={styles.dropDownButton}>Categories</button>
      {isOpen && (
        <div className={styles.dropDownMenu}>
          <a href="#">Anime</a>
          <a href="#">live Action</a>
          <a href="#">Movie</a>
        </div>
      )}
    </div>
  );
}

export default CategoriesItem;
