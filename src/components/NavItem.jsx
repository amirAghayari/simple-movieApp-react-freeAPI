import CategoriesItem from "./CategoriesItem";
import ContactItem from "./ContactItem";
import FilmsItem from "./FilmsItem";
import styles from "./Navbar.module.css";
import SerialsItem from "./SerialsItem";

function NavItemv2() {
  return (
    <div className={styles.navUl}>
      <FilmsItem />
      <SerialsItem />
      <CategoriesItem />
      <ContactItem />
    </div>
  );
}

export default NavItemv2;
