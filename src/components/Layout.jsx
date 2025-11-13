import styles from "./Layout.module.css";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </div>
  );
}

export default Layout;