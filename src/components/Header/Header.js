import React from "react";
import "./index.css";

function Header(props) {
    return (
      <div className="header">
        <div class="nav">
  <input type="checkbox" id="nav-check" />
  <div class="nav-header">
    <div class="nav-title">
      Imre Vigh
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  {/* Some code has been taken for the responsive navbar from the following website:
  https://codepen.io/jo_Geek/pen/xgbaEr */}
  {/* Using conditional rendering for the navigation */}
  <div class="nav-links">
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
          <a className="nav-link" href="IMRE_VIGH_Resume.pdf" download="" target='_blank'>Resume</a>
  </div>
</div>
      </div>
    );
}

export default Header;