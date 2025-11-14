import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logout from "../Logout";
import NavForm from "./NavForm";
import NavItem from "./NavItem";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.header} role="banner">
      <nav className={styles.navbar} aria-label="Primary Navigation">
        <div className="container">
          <div className={styles.row}>
            {/* Brand */}
            <div className={styles.brand}>
              <Link to="/" className={styles.brandLink} onClick={closeMenu}>
                <span className={styles.brandLogo} aria-hidden="true">
                  🎬
                </span>
                <span className={styles.brandText}>MovieApp</span>
              </Link>
            </div>

            {/* Desktop Navigation Items */}
            <div className={styles.desktopNav}>
              <NavItem />
            </div>

            {/* Desktop Actions (Search + Logout) */}
            <div className={styles.actions}>
              <div className={styles.searchWrap}>
                <NavForm />
              </div>
              <Logout />
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className={styles.menuToggle}
              aria-label={
                open ? "Close navigation menu" : "Open navigation menu"
              }
              aria-controls="primary-menu"
              aria-expanded={open}
              onClick={toggleMenu}
            >
              <span className={styles.menuIcon} />
            </button>
          </div>
        </div>

        {/* Mobile Slide-out Menu */}
        <div
          className={`${styles.menuPanel} ${open ? styles.menuOpen : ""}`}
          id="primary-menu"
        >
          <div className={styles.menuInner}>
            {/* Mobile Navigation Items - First in order */}
            <div className={styles.mobileNav}>
              <h3 className={styles.menuSectionTitle}>Navigation</h3>
              <NavItem onItemClick={closeMenu} />
            </div>

            {/* Mobile Search Form - Second in order */}
            <div className={styles.menuForm}>
              <h3 className={styles.menuSectionTitle}>Search</h3>
              <NavForm onSearch={closeMenu} />
            </div>

            {/* Mobile Logout - Third in order */}
            <div className={styles.mobileLogout}>
              <Logout onClick={closeMenu} />
            </div>
          </div>
        </div>

        {/* Scrim / Overlay */}
        {open && (
          <button
            className={styles.scrim}
            aria-label="Close menu"
            onClick={closeMenu}
          />
        )}
      </nav>
    </header>
  );
}

export default Navbar;
