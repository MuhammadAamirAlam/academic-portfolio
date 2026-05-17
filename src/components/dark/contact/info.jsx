import React from "react";

function Info() {
  return (
    <div className="sec-box contact section-padding bord-thin-top" id="info">
      <div className="row">
        <div className="col-lg-6">
          <div className="sec-head wow fadeIn">
            <h6 className="sub-title mb-15 opacity-7">Contact</h6>
            <h2 className="fz-50">Get In Touch</h2>
            <p
              className="fz-15 mt-10"
              style={{ lineHeight: "1.8", textAlign: "justify" }}
            >
              Committed to academic excellence and meaningful impact, I am fully
              dedicated to pursuing this opportunity as a defining step in my
              academic journey.
            </p>
            <div className="d-flex align-items-center mt-20">
              <span style={{ fontSize: "16px", marginRight: "10px" }}>📍</span>
              <span className="opacity-7 fz-14">
                Charsadda, Khyber Pakhtunkhwa, Pakistan
              </span>
            </div>
          </div>
        </div>

        <div className="col-lg-6 wow fadeIn" data-wow-delay=".2s">
          <div className="mt-60">
            <div
              className="item d-flex align-items-center mb-30 pb-30"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div
                className="mr-20"
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
              >
                ✉
              </div>
              <div>
                <span className="opacity-7 fz-12 d-block mb-5">
                  Email Address
                </span>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=shayanaamir0317@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="main-color fz-15 fw-600"
                >
                  shayanaamir0317@gmail.com
                </a>
              </div>
            </div>

            <div
              className="item d-flex align-items-center mb-30 pb-30"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div
                className="mr-20"
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
              >
                <i className="fab fa-linkedin-in"></i>
              </div>
              <div>
                <span className="opacity-7 fz-12 d-block mb-5">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/maamiralam"
                  target="_blank"
                  rel="noreferrer"
                  className="main-color fz-15 fw-600"
                >
                  linkedin.com/in/maamiralam
                </a>
              </div>
            </div>

            <div className="item d-flex align-items-center">
              <div
                className="mr-20"
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
              >
                <i className="fab fa-github"></i>
              </div>
              <div>
                <span className="opacity-7 fz-12 d-block mb-5">GitHub</span>
                <a
                  href="https://github.com/MuhammadAamirAlam/"
                  target="_blank"
                  rel="noreferrer"
                  className="main-color fz-15 fw-600"
                >
                  github.com/MuhammadAamirAlam
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
