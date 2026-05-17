import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleBtn = document.querySelector(".nav-butn");

    const handleToggle = (e) => {
      e.stopPropagation();
      setIsOpen((prev) => !prev);
    };

    if (toggleBtn) {
      toggleBtn.addEventListener("click", handleToggle);
    }

    const handleOutsideClick = (e) => {
      if (window.innerWidth <= 991) {
        const nav = document.querySelector(".navbar");
        if (nav && !nav.contains(e.target) && toggleBtn && !toggleBtn.contains(e.target)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      if (toggleBtn) {
        toggleBtn.removeEventListener("click", handleToggle);
      }
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <style>{`
        .navbar .navbar-nav .nav-item {
          padding: 10px 12px !important; 
        }
        /* Fix for medium screen resolutions (768px - 1024px / 1199px) where space is constrained */
        @media screen and (min-width: 992px) and (max-width: 1199px) {
          .navbar .row .col-lg-8 {
            width: 100% !important;
            max-width: 100% !important;
            flex: 0 0 100% !important;
          }
          .navbar .navbar-nav {
            width: 100% !important;
            margin-left: 0 !important;
          }
          .navbar .navbar-nav .nav-item {
            padding: 10px 8px !important; 
            font-size: 11px !important;
          }
        }
        @media (max-width: 991px) {
          .navbar.open {
            display: block !important;
          }
        }
      `}</style>
      <div className="row justify-content-end rest">
        <div className="col-lg-8 rest">
          <ul
            className="navbar-nav main-bg d-flex justify-content-right"
            style={{ fontSize: "10px" }}
            onClick={() => setIsOpen(false)}
          >
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