import React from "react";
import { Link } from "react-router-dom";

function NavTop() {
  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span
                style={{
                  fontSize: "26px",
                  fontWeight: "700",
                  color: "#fff",
                  letterSpacing: "2px",
                }}
              >
                AAMIR
              </span>
            </Link>
          </div>
          <div className="col-md-4 valign">
            <div className="social text-center full-width">
              <a
                href="https://github.com/MuhammadAamirAlam/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/maamiralam"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="nav-butn">
          <span className="pe-7s-menu"></span>
        </div>
      </div>
    </div>
  );
}

export default NavTop;
