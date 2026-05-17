import React from "react";
import { Link } from "react-router-dom";
import data from "../../../data/works.json";
import mentalHealthImg from "../../../assets/certificates/mental-health.png";
import weatherAppImg from "../../../assets/certificates/weather_app.png";

const projectPhotos = {
  "mental-health-directory": mentalHealthImg,
  "weather-app": weatherAppImg,
};

function Portfolio() {
  return (
    <div className="sec-box portfolio section-padding" id="projects">
      <div className="sec-head mb-30">
        <div className="row">
          <div className="col-lg-6">
            <h6 className="sub-title opacity-7 mb-15">My Work</h6>
            <h3>
              Recent <span className="main-color">Projects</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="row">
          {data?.slice(0, 2).map((item, index) => (
            <div key={index} className="col-lg-6 items">
              <div className="item mt-50 wow fadeInUp" data-wow-delay=".2s">
                <div className="img">
                  <Link to={item.link}>
                    <img
                      src={projectPhotos[item.id] || item.photo}
                      alt={item.title}
                    />
                  </Link>
                </div>
                <div className="cont mt-30 d-flex align-items-center">
                  <div>
                    <span className="tag">{item.tag}</span>
                    <h6 className="line-height-1">
                      <Link to={item.link}>{item.title}</Link>
                    </h6>
                  </div>
                  <div className="ml-auto">
                    <div className="arrow">
                      <Link to={item.link}>
                        <svg
                          className="arrow-right"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 34.2 32.3"
                          xmlSpace="preserve"
                          style={{ strokeWidth: 2 }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
