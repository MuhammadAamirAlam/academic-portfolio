import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import mentalHealthImg from "../../../../assets/certificates/mental-health.png";
import weatherAppImg from "../../../../assets/certificates/weather_app.png";

const projects = {
  "mental-health-directory": {
    title: "Mental Health Support Directory",
    image: mentalHealthImg,
    liveDemo: "https://mental-health-directory-xi.vercel.app/",
    description:
      "Finding mental health support shouldn't be hard. This app makes it easier. A React-based directory of 25+ free mental health professionals and resources, searchable and accessible.",
    technologies: "React, JavaScript, CSS",
    deployment: "Vercel",
  },
  "weather-app": {
    title: "Pakistan Weather Companion",
    image: weatherAppImg,
    liveDemo: "https://weatherapp-olive-iota-89.vercel.app/",
    description:
      "A weather app for Pakistan that gives real-time forecasts for major cities in both English and Urdu.",
    technologies: "JavaScript, REST API, CSS",
    deployment: "Vercel",
  },
};

const projectOrder = ["mental-health-directory", "weather-app"];

function getAdjacentProjects(currentKey) {
  const index = projectOrder.indexOf(currentKey);
  const safeIndex = index === -1 ? 0 : index;
  const prevSlug =
    projectOrder[(safeIndex - 1 + projectOrder.length) % projectOrder.length];
  const nextSlug = projectOrder[(safeIndex + 1) % projectOrder.length];
  return { prevSlug, nextSlug };
}

function ProjectView() {
  const { projectSlug } = useParams();
  const projectKey = projectSlug || "mental-health-directory";
  const project = projects[projectKey] || projects["mental-health-directory"];
  const { prevSlug, nextSlug } = getAdjacentProjects(projectKey);

  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectKey]);

  return (
    <section className="sec-box project section-padding radius-15">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="mb-40">
            <h6 className="sub-title">
              <Link to="/#projects">
                <i className="fas fa-arrow-left mr-10"></i>
                Back to Home
              </Link>
            </h6>
          </div>
          <div className="img mb-80">
            <img
              src={project.image}
              alt={project.title}
              className="radius-5"
            />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="cont md-mb50">
                <h3 className="mb-15 fw-500">{project.title}</h3>
                <p>{project.description}</p>
                <div className="mt-30">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-demo-btn"
                  >
                    <span className="live-demo-btn-content">
                      <i className="fas fa-play-circle"></i>
                      Live Demo
                    </span>
                    <span className="live-demo-btn-glow"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info sub-bg" id="sticky_item">
                <ul>
                  <li className="mb-30">
                    <span className="sub-title">
                      <i className="fas fa-code mr-10"></i> Technologies :
                    </span>
                    <p>{project.technologies}</p>
                  </li>
                  <li>
                    <span className="sub-title">
                      <i className="fas fa-cloud mr-10"></i> Deployment :
                    </span>
                    <p>{project.deployment}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="next-prev">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="d-flex align-items-center mt-80 pt-80 bord-thin-top">
              <div className="prev">
                <h6 className="sub-title">
                  <Link to={`/project/${prevSlug}`}>
                    <i className="fas fa-long-arrow-alt-left"></i> Prev Project
                  </Link>
                </h6>
              </div>
              <div className="next ml-auto">
                <h6 className="sub-title">
                  <Link to={`/project/${nextSlug}`}>
                    Next Project{" "}
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectView;
