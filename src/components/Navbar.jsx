import styles from "./Navbar.module.css";
import NavForm from "./navForm";
import NavItem from "./navItem";
function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <NavForm />
        <NavItem />
      </div>
    </div>
  );
}

export default Navbar;
