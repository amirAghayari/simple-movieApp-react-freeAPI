import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";
function ContactItem() {
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
      <button className={styles.dropDownButton}>
        <Link to="/contact" className={styles.contactLink}>
          Contact with us
        </Link>
      </button>
    </div>
  );
}

export default ContactItem;
