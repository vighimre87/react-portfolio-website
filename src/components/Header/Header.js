import React from "react";
import "./index.css";

function Header() {
    return (
        <header>
    <nav className="nav">
      <div className="nav-header">
        <div className="nav-title">
          <h1>Imre Vigh</h1>
        </div>
      </div>
      <div className="nav-links">
        <a href="#about">About Me</a>
        <a href="#work">Projects</a>
        <a href="#contact">Contact Me</a>
        <a href="files/Resume-Imre-Vigh.pdf" download="">Resume</a>
      </div>
    </nav>
  </header>
    );
}

export default Header;