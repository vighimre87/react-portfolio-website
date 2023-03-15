import React from "react";
import "./index.css";
import {Link, NavLink} from 'react-router-dom';

function Header() {
    return (
        <header>
    <nav className="nav">
      <div className="nav-header">
        <div className="nav-title">
          <Link to="/">
          <h1>Imre Vigh</h1>
          </Link>
        </div>
      </div>
      <div className="nav-links">
        <a className="nav-link" href="#home">
          <NavLink to='/'
                    end
                    className={({isActive}) =>
                      isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
        </a>
        <a className="nav-link" href="#projects">
          <NavLink to='/projects'
                    end
                    className={({isActive}) =>
                      isActive ? 'nav-link active' : 'nav-link'}>
            Projects
          </NavLink></a>
        <a className="nav-link" href="#contact">
          <NavLink to='/contact'
                    end
                    className={({isActive}) =>
                      isActive ? 'nav-link active' : 'nav-link'}>
            Contact
          </NavLink></a>
        <a className="nav-link" href="files/Resume-Imre-Vigh.pdf" download="">Resume</a>
      </div>
    </nav>
  </header>
    );
}

export default Header;