import { useState } from "react";
import styles from "./Navbar.module.css";

function SerialsItem() {
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
      <button className={styles.dropDownButton}>Serials</button>
      {isOpen && (
        <div className={styles.dropDownMenu}>
          <a href="#">Action</a>
          <a href="#">Comedy</a>
          <a href="#">Drama</a>
          <a href="#">Romance</a>
        </div>
      )}
    </div>
  );
}

export default SerialsItem;
