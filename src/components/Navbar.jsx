import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav" id="nav">
      <Link to="/" className="brand" onClick={closeMenu}>
        <span className="brand-mark">B</span>
        <span>BISIT BAR</span>
      </Link>

      <button
        className="menu"
        aria-label="Open menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        ☰
      </button>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>

        <Link to="/culture" onClick={closeMenu}>
          Culture
        </Link>

        <Link to="/gallery" onClick={closeMenu}>
          Gallery
        </Link>

        <Link to="/program" onClick={closeMenu}>
          Program
        </Link>

        <Link to="/location" onClick={closeMenu}>
          Location
        </Link>
      </nav>
    </header>
  );
}