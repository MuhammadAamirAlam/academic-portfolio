import React from "react";

function Profile() {
  return (
    <section id="home" className="intro-profile md-mb50">
      <style>{`
        /* Responsive fixes for medium and small screens (< 1200px) */
        @media screen and (max-width: 1199px) {
          .intro-profile .box-img,
          .intro-profile .content {
            width: 100% !important;
            max-width: 100% !important;
            flex: 0 0 100% !important;
          }
          .intro-profile .content:after {
            display: none !important;
          }
          .intro-profile .box-img {
            border-radius: 15px 15px 0 0 !important;
            margin-bottom: 0 !important;
            padding: 60px 30px 30px 30px !important;
          }
          .intro-profile .content {
            border-radius: 0 0 15px 15px !important;
            padding: 40px 30px 60px 30px !important;
          }
          .intro-profile .content h1 {
            font-size: 34px !important;
            line-height: 1.3 !important;
          }
          .intro-profile .content .stauts {
            margin-top: 40px !important;
          }
        }
        @media screen and (max-width: 575px) {
          .intro-profile .content h1 {
            font-size: 28px !important;
          }
          .intro-profile .box-img,
          .intro-profile .content {
            padding: 40px 20px !important;
          }
        }
      `}</style>
      <div className="row rest">
        <div className="col-lg-4 box-img main-bg">
          <div className="cont valign">
            <div className="full-width">
              <div className="img">
                <img
                  src="/assets/imgs/header/profile.png"
                  alt="Muhammad Aamir Alam"
                />
                <span className="icon">
                  <img src="/assets/imgs/header/icon1.png" alt="" />
                </span>
                <span className="icon">
                  <img src="/assets/imgs/header/icon2.png" alt="" />
                </span>
                <span className="icon">
                  <img src="/assets/imgs/header/icon3.png" alt="" />
                </span>
              </div>
              <div className="info text-center mt-30">
                <h5>Muhammad Aamir Alam</h5>
              </div>
              <div className="social text-center mt-20">
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
        </div>

        <div className="col-lg-8 content main-bg">
          <h1>
            Hello, I'm <span className="main-color">Muhammad Aamir Alam</span>,{" "}
            <span className="bord">
              Front-end Developer <i></i>
            </span>{" "}
            Based in Pakistan.
          </h1>

          <div className="stauts mt-80">
            <div className="d-flex align-items-center">
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>1+</h2>
                  <p>
                    Year <br /> of Experience
                  </p>
                </div>
              </div>

              <div>
                <div className="butn-presv">
                  <a href="#0" className="butn butn-md butn-bord radius-5 skew">
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
