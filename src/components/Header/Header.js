import React from "react";
import "./index.css";

function Header(props) {
    return (
        <div className="header">
    <nav className="nav">
      <div className="nav-header">
        <div className="nav-title">
          <h1>Imre Vigh</h1>
        </div>
      </div>
      <div className="nav-links">
        <a className={({isActive}) =>
                      isActive ? 'nav-link active' : 'nav-link'}
                      href="#home"
                      onClick={() => props.handlePageChange("Home")}> 
            Home
        </a>
        <a className={({isActive}) =>
                      isActive ? 'nav-link active' : 'nav-link'}
                      href="#projects"
                      onClick={() => props.handlePageChange("Projects")}>
            Projects
          </a>
        <a className={({isActive}) =>
                      isActive ? 'nav-link active' : 'nav-link'}
                      href="#contact"
                      onClick={() => props.handlePageChange("Contact")}
                      >
            Contact
            </a>
        <a className="nav-link" href="Resume-Imre-Vigh.pdf" download="">Resume</a>
      </div>
    </nav>
  </div>
    );
}

export default Header;