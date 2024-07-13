import React from 'react'
import "../styles/styles.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div class="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#experience">Experience</a>
        <a href="#licences">Licences</a>
      </nav>
    </header>
  );
}

export default Header