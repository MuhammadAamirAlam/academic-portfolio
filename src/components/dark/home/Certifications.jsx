import React, { useState, useEffect } from "react";
import diploma1 from "../../../assets/certificates/vol1.webp";
import diploma2 from "../../../assets/certificates/vol2.webp";
import internship1 from "../../../assets/certificates/internship-1.webp";
import vol3 from "../../../assets/certificates/vol3.webp";
import vol4 from "../../../assets/certificates/vol4.webp";
import vol5 from "../../../assets/certificates/vol5.webp";
import cert1 from "../../../assets/certificates/Cert1.webp";
import cert2 from "../../../assets/certificates/Cert2.webp";
import cert3 from "../../../assets/certificates/Cert3.webp";
import cert4 from "../../../assets/certificates/Cert4.webp";
import cert5 from "../../../assets/certificates/Cert5.webp";
import cert6 from "../../../assets/certificates/Cert6.webp";
import cert7 from "../../../assets/certificates/Cert7.webp";
import cert8 from "../../../assets/certificates/Cert8.webp";
import cert9 from "../../../assets/certificates/Cert9.webp";
import cert10 from "../../../assets/certificates/Cert10.webp";
import cert11 from "../../../assets/certificates/Cert11.webp";
import cert12 from "../../../assets/certificates/Cert12.webp";
import cert13 from "../../../assets/certificates/Cert13.webp";
import cert14 from "../../../assets/certificates/Cert14.webp";
import cert15 from "../../../assets/certificates/Cert15.webp";
import cert16 from "../../../assets/certificates/Cert16.webp";
import webDevCert from "../../../assets/certificates/Web_Development_Certificate.webp";

const categories = [
  {
    label: "Internships",
    items: [
      {
        title: "Web Development Internship",
        issuer: "Digital Empowerment Network",
        image: internship1,
        link: null,
        btnText: "View Offer Letter",
      },
    ],
  },
  {
    label: "Coursera",
    items: [
      {
        title:
          "HTML, CSS, and Javascript for Web Developers – Johns Hopkins University",
        issuer: "Coursera",
        image: cert1,
        link: "https://coursera.org/verify/2CILFGIH0RM7",
      },
      {
        title: "Introduction to Front-End Development – Meta",
        issuer: "Coursera",
        image: cert2,
        link: "https://coursera.org/verify/YQQ64I9ENEJE",
      },
      {
        title: "Introduction to CSS3 – Johns Hopkins University",
        issuer: "Coursera",
        image: cert3,
        link: "https://coursera.org/verify/Z9PY0R4HWA4U",
      },
      {
        title: "Introduction to HTML, CSS, & JavaScript – IBM",
        issuer: "Coursera",
        image: cert4,
        link: "https://coursera.org/verify/M5XJKDJ9Q9PI",
      },
      {
        title: "AI For Everyone – DeepLearning.AI",
        issuer: "Coursera",
        image: cert5,
        link: "https://coursera.org/verify/QIFRMJ7SI7JY",
      },
      {
        title:
          "Creating a Quiz Game using Vanilla JavaScript – Coursera Project Network",
        issuer: "Coursera",
        image: cert6,
        link: "https://coursera.org/verify/B8Z6PS68G4UX",
      },
      {
        title:
          "Creating a Multi-Page Web Application using HTML & CSS – Coursera Project Network",
        issuer: "Coursera",
        image: cert7,
        link: "https://coursera.org/verify/S28ABKQZ12PF",
      },
      {
        title:
          "Designing a Restaurant Menu Website using HTML and CSS – Coursera Project Network",
        issuer: "Coursera",
        image: cert8,
        link: "https://coursera.org/verify/K3EYPTKI9YR2",
      },
      {
        title: "Learn About JSON with JavaScript – Coursera Project Network",
        issuer: "Coursera",
        image: cert9,
        link: "https://coursera.org/verify/H4VOGVUGY5X8",
      },
      {
        title:
          "JavaScript for Beginners: Primitive Data Types – Coursera Project Network",
        issuer: "Coursera",
        image: cert10,
        link: "https://coursera.org/verify/9USKFUTDGR2R",
      },
      {
        title: "Introduction to JavaScript – Freedom Learning Group",
        issuer: "Coursera",
        image: cert11,
        link: "https://coursera.org/verify/LCIBKKA1U8DW",
      },
      {
        title:
          "Creating Social Media Visuals for Business using Canva – Coursera Project Network",
        issuer: "Coursera",
        image: cert12,
        link: "https://coursera.org/verify/AVZW2EFXUR41",
      },
      {
        title: "Introduction to HTML – Freedom Learning Group",
        issuer: "Coursera",
        image: cert13,
        link: "https://coursera.org/verify/UYQLKPFY67ND",
      },
      {
        title: "Images and Links in HTML – Freedom Learning Group",
        issuer: "Coursera",
        image: cert14,
        link: "https://coursera.org/verify/SQ4C4YYS1EXY",
      },
      {
        title: "HTML for Beginners: Working with Images – Cleerup.com",
        issuer: "Coursera",
        image: cert15,
        link: "https://coursera.org/verify/SEMJQC877DIL",
      },
      {
        title: "HTML for Beginners: Classes and ID – Cleerup.com",
        issuer: "Coursera",
        image: cert16,
        link: "https://coursera.org/verify/ZJUYF99WGY9D",
      },
    ],
  },
  {
    label: "Achievements",
    items: [
      {
        title: "Web & Mobile App Development",
        issuer: "Saylani Mass IT Training Program",
        duration: "Nov 2024 - Mar 2026",
        image: webDevCert,
        link: null,
        isDiploma: false,
      },
      {
        title: "Diploma of High Achievement",
        subtitle: "Computer & Data Science",
        issuer: "Open Doors — Global Universities Association",
        number: "№ 2025-BT-COM-H209",
        location: "Moscow, Russian Federation · 28.04.2026",
        image: diploma1,
        link: null,
        isDiploma: false,
      },
      {
        title: "Diploma of High Achievement",
        subtitle: "Engineering & Technology",
        issuer: "Open Doors — Global Universities Association",
        number: "№ 2025-BT-ENG-H326",
        location: "Moscow, Russian Federation · 28.04.2026",
        image: diploma2,
        link: null,
        isDiploma: false,
      },
    ],
  },
  {
    label: "Others",
    items: [
      {
        title: "TEDx",
        issuer: "TEDx",
        image: vol3,
        link: null,
      },
      {
        title: "Hack The Web: Practical Hacking For Beginners",
        issuer: "AUP",
        image: vol4,
        link: null,
      },
      {
        title: "Public Speaking with Canva",
        issuer: "Coursera",
        image: vol5,
        link: null,
      },
    ],
  },
];


function CertImage({
  src,
  alt,
  height = "140px",
  isDiploma = false,
  isThumbnail = false,
  priority = false,
}) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      style={{
        width: "100%",
        height,
        background: "rgba(255,255,255,0.03)",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {!loaded && !failed && <div className="shimmer-loader" />}
      {failed ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1.5"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          <span
            style={{
              fontSize: "9px",
              color: "rgba(255,255,255,0.1)",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            {isDiploma ? "Diploma" : "Certificate"}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: isThumbnail ? "contain" : "cover",
            pointerEvents: "none",
            userSelect: "none",
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
            WebkitUserDrag: "none",
            KhtmlUserDrag: "none",
            MozUserDrag: "none",
            OUserDrag: "none",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          draggable={false}
        />
      )}
    </div>
  );
}

function Certifications() {
  const [activeTab, setActiveTab] = useState("Achievements");
  const [lightbox, setLightbox] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    setVisibleCount(4);
    const timer = setTimeout(() => {
      setVisibleCount(999);
    }, 150);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div
      className="sec-box certifications section-padding bord-thin-bottom"
      id="certifications"
    >
      <style>{`
        @keyframes tabFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .tab-content-anim {
          animation: tabFadeIn 0.4s ease-out forwards;
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .shimmer-loader {
          background: linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 1;
        }
        .cert-card {
          background: #1d1d1d;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          cursor: default;
          content-visibility: auto;
          contain-intrinsic-size: 260px;
        }
        .cert-card:hover {
          border-color: var(--maincolor);
        }
        .cert-img {
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          height: 140px;
        }
        .cert-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          background: transparent;
          border: none;
          padding: 0;
          margin-bottom: 0;
        }
        .cert-tab {
          padding: 8px 18px;
          border-radius: 30px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.6);
          font-size: 13px;
          font-weight: 500;
          transition: all 0.3s ease;
          outline: none;
          position: relative;
          flex: none;
          justify-content: center;
        }
        .cert-tab:hover {
          color: rgba(255,255,255,0.9);
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.15);
          transform: translateY(-1px);
        }
        .cert-tab.active {
          background: var(--maincolor);
          border-color: var(--maincolor);
          color: #111;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(200,243,29,0.25);
        }
        .cert-tab .count {
          font-size: 11px;
          background: rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.8);
          padding: 2px 8px;
          border-radius: 12px;
          font-weight: 500;
          min-width: 22px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .cert-tab.active .count {
          background: rgba(0,0,0,0.2);
          color: #111;
          font-weight: 600;
        }
        .cert-btn {
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
        .diploma-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 500;
          padding: 6px 12px;
          border-radius: 6px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          transition: all 0.4s;
          cursor: pointer;
          min-width: fit-content;
          white-space: nowrap;
        }
        .cert-btn:hover {
          background: var(--maincolor);
          border-color: var(--maincolor);
          color: #1d1d1d;
        }
        .diploma-btn:hover {
          background: var(--maincolor);
          border-color: var(--maincolor);
          color: #1d1d1d;
        }
        .diploma-card {
          position: relative;
          background: #1d1d1d;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.4s;
          cursor: default;
          content-visibility: auto;
          contain-intrinsic-size: 260px;
        }
        .diploma-card:hover {
          border-color: var(--maincolor);
        }
        .diploma-img {
          position: relative;
          overflow: hidden;
        }
        .diploma-img img {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          user-drag: none;
          pointer-events: none;
        }
        .diploma-card:hover .diploma-img img {
          pointer-events: auto;
        }
        .lightbox-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.95);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: zoom-out;
          animation: lbFadeIn 0.2s ease;
        }
        @keyframes lbFadeIn { from { opacity: 0; } to { opacity: 1; } }
        .lightbox-img {
          max-width: 88vw;
          max-height: 88vh;
          border-radius: 8px;
          box-shadow: 0 0 80px rgba(0,0,0,0.8);
          animation: lbScale 0.22s ease;
          cursor: default;
        }
        @keyframes lbScale { from { transform: scale(0.93); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .lightbox-close {
          position: absolute;
          top: 20px; right: 26px;
          color: rgba(255,255,255,0.5);
          font-size: 26px;
          cursor: pointer;
          line-height: 1;
          transition: color 0.2s ease;
          font-weight: 300;
        }
        .lightbox-close:hover { color: #fff; }
        .issuer-badge {
          position: absolute;
          bottom: 8px; left: 8px;
          background: rgba(0,0,0,0.7);
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 10px;
          color: rgba(255,255,255,0.6);
        }
      `}</style>

      {}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <span className="lightbox-close">✕</span>
          <img
            src={lightbox}
            alt="Certificate"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {}
      <div className="row mb-50">
        <div
          className="col-12 d-flex align-items-end justify-content-between flex-wrap wow fadeIn"
          style={{ gap: "20px" }}
        >
          <div>
            <h6 className="sub-title opacity-7 mb-15">Verified Credentials</h6>
            <h3>
              Certifi<span className="main-color">cations</span>
            </h3>
          </div>
          <div className="cert-tabs">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(cat.label)}
                className={`cert-tab${activeTab === cat.label ? " active" : ""}`}
              >
                {cat.label}
                <span className="count">{cat.items.length}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          marginBottom: "40px",
        }}
      />

      {categories.map((cat, catIndex) => {
        if (activeTab !== cat.label) return null;
        return (
          <div
            key={catIndex}
            className="row tab-content-anim"
            style={{ display: "flex" }}
          >
          {cat.label === "Achievements" ? (
            cat.items.slice(0, visibleCount).map((cert, i) => (
              <div key={i} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-25">
                <div className="diploma-card">
                  <CertImage
                    src={cert.image}
                    alt={cert.title}
                    height="140px"
                    isDiploma={false}
                    isThumbnail={true}
                    priority={i < 4}
                  />
                  <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: "1" }}>
                    {cert.isDiploma !== false ? (
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "10px",
                          padding: "2px 10px",
                          borderRadius: "20px",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "var(--maincolor)",
                          letterSpacing: "0.5px",
                          textTransform: "uppercase",
                          marginBottom: "8px",
                          fontWeight: "500",
                        }}
                      >
                        Diploma
                      </div>
                    ) : (
                      <div style={{ height: "24px", marginBottom: "8px" }} />
                    )}
                    <h5
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "#fff",
                        lineHeight: "1.4",
                        marginBottom: "4px",
                      }}
                    >
                      {cert.title || cert.subtitle}
                    </h5>
                    <p
                      style={{
                        fontSize: "11px",
                        color: "var(--maincolor)",
                        marginBottom: "8px",
                        fontWeight: "500",
                        letterSpacing: "0.3px",
                      }}
                    >
                      {cert.issuer}
                    </p>
                    {cert.duration && (
                      <p
                        style={{
                          fontSize: "10px",
                          color: "rgba(255,255,255,0.5)",
                          marginTop: "-4px",
                          marginBottom: "8px",
                          fontWeight: "500",
                        }}
                      >
                        {cert.duration}
                      </p>
                    )}
                    <div className="mt-auto pt-10">
                      <div
                        className="diploma-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(cert.image, "_blank", "noopener,noreferrer");
                        }}
                      >
                        <span>📄</span>
                        <span>{cert.btnText || (cert.isDiploma === false ? "View Certificate" : "View Diploma")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            cat.items.slice(0, visibleCount).map((cert, i) => (
              <div key={i} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-25">
                <div className="cert-card">
                  <div className="cert-img">
                    <CertImage
                      src={cert.image}
                      alt={cert.title}
                      height="140px"
                      isThumbnail={true}
                      priority={i < 4}
                    />
                    <div className="issuer-badge">{cert.issuer}</div>
                  </div>
                  <div
                    style={{
                      padding: "16px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <h6
                      style={{
                        fontSize: "13px",
                        fontWeight: "500",
                        lineHeight: "1.4",
                        color: "#fff",
                        marginBottom: "10px",
                      }}
                    >
                      {cert.title}
                    </h6>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      {cert.link ? (
                        <>
                          <div
                            className="cert-btn"
                            style={{ width: "130px", height: "28px" }}
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(cert.image, "_blank", "noopener,noreferrer");
                            }}
                          >
                            <span>📄</span>
                            <span>{cert.btnText || "View Certificate"}</span>
                          </div>
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noreferrer"
                            className="cert-btn"
                            style={{ width: "130px", height: "28px" }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>🔗</span>
                            <span>Verify Credential</span>
                          </a>
                        </>
                      ) : (
                        <div
                          className="cert-btn"
                          style={{ width: "130px", height: "28px" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(cert.image, "_blank", "noopener,noreferrer");
                          }}
                        >
                          <span>📄</span>
                          <span>{cert.btnText || "View Certificate"}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        );
      })}
    </div>
  );
}

export default Certifications;
