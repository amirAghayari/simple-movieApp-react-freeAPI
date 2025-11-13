import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import NavForm from "./NavForm";
import NavItem from "./NavItem";
import Logout from "./Logout";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <header className={styles.header} role="banner">
      <nav className={styles.navbar} aria-label="Primary">
        <div className="container">
          <div className={styles.row}>
            <div className={styles.brand}>
              <Link to="/" className={styles.brandLink} onClick={close}>
                <span className={styles.brandLogo} aria-hidden="true">🎬</span>
                <span className={styles.brandText}>MovieApp</span>
              </Link>
            </div>

            <button
              type="button"
              className={styles.menuToggle}
              aria-label={open ? "بستن منوی ناوبری" : "باز کردن منوی ناوبری"}
              aria-controls="primary-menu"
              aria-expanded={open}
              onClick={toggle}
            >
              <span className={styles.menuIcon} />
            </button>

            <div className={styles.actions}>
              <div className={styles.searchWrap}><NavForm /></div>
              <Logout />
            </div>
          </div>
        </div>

        <div className={`${styles.menuPanel} ${open ? styles.menuOpen : ""}`} id="primary-menu">
          <div className={styles.menuInner}>
            <NavItem />
            <div className={styles.menuForm}><NavForm /></div>
          </div>
        </div>

        {open && (
          <button className={styles.scrim} aria-label="بستن منو" onClick={close} />
        )}
      </nav>
    </header>
  );
}

export default Navbar;
