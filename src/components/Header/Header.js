import React from "react";

function Header() {
    return (
        <header>
    <nav class="nav">
      <div class="nav-header">
        <div class="nav-title">
          <h1>Imre Vigh</h1>
        </div>
      </div>
      <div class="nav-links">
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