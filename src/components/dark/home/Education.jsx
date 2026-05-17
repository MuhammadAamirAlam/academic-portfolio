import React from "react";
import alkhidmatCert from "../../../assets/certificates/Alkhidmat_Certificate.webp";
import hhrdCert from "../../../assets/certificates/HHRD_Internship_Certificate_2023.webp";

function Education() {
  return (
    <div
      className="sec-box education section-padding bord-thin-bottom"
      id="education"
    >
      <style>{`
        .edu-timeline {
          position: relative;
          padding-left: 30px;
          margin-top: 20px;
        }
        .edu-timeline::before {
          content: '';
          position: absolute;
          left: 10px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(255,255,255,0.1);
        }
        .edu-timeline-item {
          position: relative;
          margin-bottom: 40px;
        }
        .edu-timeline-item::before {
          content: '';
          position: absolute;
          left: -25px;
          top: 8px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--maincolor);
          border: 2px solid rgba(255,255,255,0.1);
          z-index: 2;
        }
        .edu-logo {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          object-fit: contain;
          background: rgba(255,255,255,0.05);
          padding: 6px;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .edu-year-badge {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: rgba(200,243,29,0.85);
          padding: 4px 12px;
          border-radius: 12px;
          font-weight: 500;
          font-size: 12px;
          display: inline-block;
          position: absolute;
          top: 20px;
          right: 20px;
        }
        .edu-grade {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: rgba(200,243,29,0.85);
          padding: 6px 12px;
          border-radius: 8px;
          font-weight: 500;
          font-size: 13px;
          display: inline-flex;
          align-items: center;
        }
        .edu-subject-tag {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.8);
          padding: 3px 10px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 400;
        }
        .edu-card {
          background: #232323;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 20px;
          position: relative;
        }
        .volunteer-card {
          background: #1d1d1d;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 18px;
          margin-bottom: 16px;
          position: relative;
          transition: all 0.4s;
          cursor: default;
        }
        .volunteer-card:hover {
          border-color: var(--maincolor);
        }
        .cert-link-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 500;
          padding: 3px 8px;
          border-radius: 5px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          transition: all 0.4s;
          cursor: pointer;
          width: 130px;
          height: 28px;
          white-space: nowrap;
          box-sizing: border-box;
        }
        .cert-link-btn:hover {
          background: var(--maincolor);
          border-color: var(--maincolor);
          color: #1d1d1d;
        }
        .edu-section-title {
          font-size: 13px;
          font-weight: 600;
          color: var(--maincolor);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }
        .lang-proficiency-section {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 30px;
          margin-top: 40px;
        }
        .lang-card {
          background: #1d1d1d;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 15px;
          transition: all 0.3s ease;
          position: relative;
        }
        .lang-level-badge {
          font-size: 12px;
          padding: 3px 10px;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.8);
          position: absolute;
          top: 10px;
          right: 10px;
        }
        .section-divider {
          height: 1px;
          background: rgba(255,255,255,0.1);
          margin: 40px 0;
        }
      `}</style>

      {}
      <div className="mb-40">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="sec-head text-center">
              <h1
                className="mb-20"
                style={{ fontSize: "2rem", fontWeight: "600" }}
              >
                My <span className="main-color">Education</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="edu-timeline">
        <div className="text-center mb-40"></div>

        {}
        <div className="edu-timeline-item">
          <div>
            <div className="edu-year-badge">2022</div>
            <div className="row align-items-start g-3">
              <div className="col-auto">
                <img
                  src="/assets/imgs/aps_logo.png"
                  alt="APS Logo"
                  className="edu-logo"
                />
              </div>
              <div className="col">
                <div className="mb-2">
                  <h4 className="fz-16 fw-500 mb-2">
                    Higher Secondary School Certificate — Computer Science
                  </h4>
                  <div className="d-flex flex-column gap-1 mb-2">
                    <p className="opacity-8 fz-13 mb-0 fw-500">
                      Army Public School & College Attock Cantt
                    </p>
                    <p className="opacity-7 fz-12 mb-0">
                      Federal Board of Intermediate & Secondary Education,
                      Islamabad
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <div className="edu-grade">
                    <span>Grade: A1 — 81.72%</span>
                  </div>
                  <div className="d-flex flex-wrap gap-1">
                    {["Computer Science", "Mathematics", "Physics"].map(
                      (sub, i) => (
                        <span key={i} className="edu-subject-tag">
                          {sub}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="edu-timeline-item">
          <div>
            <div className="edu-year-badge">2020</div>
            <div className="row align-items-start g-3">
              <div className="col-auto">
                <img
                  src="/assets/imgs/aps_logo.png"
                  alt="APS Logo"
                  className="edu-logo"
                />
              </div>
              <div className="col">
                <div className="mb-2">
                  <h4 className="fz-16 fw-500 mb-2">
                    Secondary School Certificate (SSC)
                  </h4>
                  <div className="d-flex flex-column gap-1 mb-2">
                    <p className="opacity-8 fz-13 mb-0 fw-500">
                      Army Public School & College Attock Cantt
                    </p>
                    <p className="opacity-7 fz-12 mb-0">
                      Federal Board of Intermediate & Secondary Education,
                      Islamabad
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <div className="edu-grade">
                    <span>Grade: A1 — 83.45%</span>
                  </div>
                  <div className="d-flex flex-wrap gap-1">
                    {[
                      "Computer Science",
                      "Mathematics",
                      "Physics",
                      "Chemistry",
                    ].map((sub, i) => (
                      <span key={i} className="edu-subject-tag">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider"></div>

      {}
      <h6 className="edu-section-title mb-40 text-center">
        Language Proficiency
      </h6>
      <div className="row g-4" style={{ paddingLeft: "30px" }}>
        {[
          {
            lang: "English",
            level: "B2",
            desc: "Upper Intermediate",
          },
          {
            lang: "Urdu",
            level: "C2",
            desc: "Proficient",
          },
          {
            lang: "Pashto",
            level: "Native",
            desc: "Mother Tongue",
          },
        ].map((item, i) => (
          <div key={i} className="col-md-4 col-12">
            <div className="lang-card">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <div className="fz-16 fw-500 mb-2">{item.lang}</div>
                  <div className="fz-13 opacity-7">{item.desc}</div>
                </div>
              </div>
              <div className="lang-level-badge">{item.level}</div>
            </div>
          </div>
        ))}
      </div>

      {}
      <div className="mt-40">
        <h6 className="edu-section-title mb-40 text-center">
          Experience & Volunteer Work
        </h6>
        <div className="row g-4">
          {[
            {
              role: "IT Officer",
              organization: "Alkhidmat Hospital Charsadda (NGO)",
              year: "2023 – Present",
              description:
                "Managing and supporting IT operations at a registered healthcare NGO.",
              certificate: alkhidmatCert,
            },
            {
              role: "Intern — Orphan Support Program",
              organization: "Helping Hand for Relief and Development (HHRD), Charsadda",
              year: "2023",
              description: "Contributed to community welfare initiatives under the Orphan Support Program (OSP).",
              certificate: hhrdCert,
            },
            
          ].map((item, i) => (
            <div key={i} className="col-lg-6 col-md-6">
              <div className="volunteer-card h-100">
                <div className="d-flex flex-column h-100">
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h6 className="fz-14 mb-0" style={{ fontWeight: 500 }}>
                        {item.role}
                      </h6>
                      <span
                        className="edu-year-badge"
                        style={{
                          fontSize: "11px",
                          padding: "4px 12px",
                          borderRadius: "20px",
                          border: "1px solid rgba(255,255,255,0.15)",
                          background: "rgba(255,255,255,0.03)",
                          color: "rgba(255,255,255,0.7)",
                          fontWeight: 400,
                        }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <p className="opacity-8 fz-13 mb-2 fw-500">
                      {item.organization}
                    </p>
                    <p className="opacity-7 fz-12 mb-3">{item.description}</p>
                  </div>
                  <div className="mt-auto">
                    <a
                      href={item.certificate}
                      target="_blank"
                      rel="noreferrer"
                      className="cert-link-btn"
                    >
                      <span>📄</span>
                      <span>View Certificate</span>
                    </a>
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

export default Education;
