import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <style>{`
        .navbar .navbar-nav .nav-item {
          padding: 10px 12px !important; 
        }
      `}</style>
      <div className="row justify-content-end rest">
        <div className="col-lg-8 rest">
          <ul className="navbar-nav main-bg d-flex justify-content-right" style={{ fontSize: "10px"}}>
            <li className="nav-item">
              <Link to="home" spy={true} smooth={true}>
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="education" spy={true} smooth={true}>
                <span>Profile</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="skills" spy={true} smooth={true}>
                <span>Skills</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="projects" spy={true} smooth={true}>
                <span>Projects</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="certifications" spy={true} smooth={true}>
                <span>Certifications</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="references" spy={true} smooth={true}>
                <span>References</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="info" spy={true} smooth={true}>
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;