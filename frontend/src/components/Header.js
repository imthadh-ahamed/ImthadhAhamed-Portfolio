import React, { useState } from "react";
import "../styles/styles.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Add icons for the menu button

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <div className="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
        <a href="#about" onClick={() => setIsOpen(false)}>
          About
        </a>
        <a href="#experience" onClick={() => setIsOpen(false)}>
          Experience
        </a>
        <a href="#portfolio" onClick={() => setIsOpen(false)}>
          Portfolio
        </a>
        <a href="#educations" onClick={() => setIsOpen(false)}>
          Educations
        </a>
        <a href="#skills" onClick={() => setIsOpen(false)}>
          Skills
        </a>
        <a href="#licences" onClick={() => setIsOpen(false)}>
          Licences
        </a>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}

export default Header;
