import React from "react";

const references = [
  {
    name: "Humaira Naz",
    initials: "HN",
    designation: "Section Head & Computer Science Teacher",
    institution: "Army Public School & College Attock Cantt",
    email: "Humairanaz620@gmail.com",
    phone: "+92 332 560 4406",
  },
  {
    name: "Masood Anwar",
    initials: "MA",
    designation: "Academic Coordinator",
    institution: "Army Public School & College Attock Cantt",
    email: "apsacattock@gmail.com",
    phone: "+92 315 910 8910",
  },
];

export default function References() {
  return (
    <div
      className="sec-box references section-padding bord-thin-bottom"
      id="references"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .refs-root { font-family: 'DM Sans', sans-serif; padding: 2rem 0; }

        .refs-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 0.5px solid rgba(255,255,255,0.06);
        }
        .refs-eyebrow {
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 6px;
          font-weight: 400;
        }
        .refs-title {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
          line-height: 1.2;
        }

        .refs-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          padding: 8px 14px;
          flex-shrink: 0;
        }
        .refs-badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
        }
        .refs-badge-text {
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          font-weight: 400;
          white-space: nowrap;
        }

        .refs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }
        @media (max-width: 600px) {
          .refs-grid { grid-template-columns: 1fr; }
          .refs-header { flex-direction: column; gap: 12px; }
        }

        .ref-card {
          background: #1d1d1d;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.4s;
        }
        .ref-card:hover {
          border-color: var(--maincolor);
        }

        .ref-card-body { padding: 20px 20px 0; flex: 1; }

        .ref-num {
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          font-weight: 500;
          margin-bottom: 14px;
        }

        .ref-avatar-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }
        .ref-avatar {
          width: 46px; height: 46px;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.4);
          flex-shrink: 0;
          letter-spacing: 1px;
          transition: all 0.4s;
        }
        .ref-card:hover .ref-avatar {
          border-color: var(--maincolor);
          background: rgba(255,255,255,0.07);
          color: var(--maincolor);
        }
        .ref-name {
          font-size: 15px;
          font-weight: 500;
          color: #ffffff;
          margin: 0 0 3px;
          line-height: 1.3;
        }

        .ref-sep {
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin: 0 0 16px;
        }

        .ref-meta-label {
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 3px;
        }
        .ref-meta-val {
          font-size: 12px;
          color: rgba(255,255,255,0.55);
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .ref-rel-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 4px 14px;
          font-size: 10px;
          color: var(--maincolor);
          letter-spacing: 0.8px;
          text-transform: uppercase;
          margin-bottom: 16px;
          font-weight: 500;
        }
        .ref-rel-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
        }

        .ref-card-footer {
          padding: 0 20px 20px;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .ref-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ref-contact-icon {
          width: 32px; height: 32px;
          border-radius: 6px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.4s;
          color: rgba(255,255,255,0.4);
          cursor: pointer;
        }
        .ref-contact-icon:hover {
          background: var(--maincolor);
          border-color: var(--maincolor);
          color: #1d1d1d;
        }
        .ref-contact-text {
          font-size: 11px;
          color: rgba(255,255,255,0.45);
          word-break: break-all;
          text-decoration: none;
        }

        .refs-note {
          background: #1d1d1d;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 14px 18px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .refs-note-text {
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          line-height: 1.9;
          margin: 0;
          font-style: italic;
        }
      `}</style>

      <div className="refs-root">
        {}
        <div className="refs-header">
          <div>
            <p className="refs-eyebrow">Professional Recommendations</p>
            <h3 className="refs-title">
              Refer<span className="main-color">ences</span>
            </h3>
          </div>
        </div>

        {}
        <div className="refs-grid">
          {references.map((ref, i) => {
            return (
              <div key={i} className="ref-card">
                <div className="ref-card-accent" />

                <div className="ref-card-body">
                  <p className="ref-num">Referee 0{i + 1}</p>

                  <div className="ref-avatar-row">
                    <div className="ref-avatar">{ref.initials}</div>
                    <div>
                      <p className="ref-name">{ref.name}</p>
                      {}
                      <p
                        className="main-color"
                        style={{ fontSize: "11px", margin: 0, fontWeight: 400 }}
                      >
                        {ref.designation}
                      </p>
                    </div>
                  </div>

                  <div className="ref-sep" />

                  <p className="ref-meta-label">Institution</p>
                  <p className="ref-meta-val">{ref.institution}</p>

                  <div className="ref-sep" />
                </div>

                <div className="ref-card-footer">
                  <div className="ref-contact-item">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&to=${ref.email}`}
                      target="_blank"
                      rel="noreferrer"
                      className="ref-contact-icon"
                      style={{ textDecoration: "none" }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <rect x="1" y="3" width="14" height="10" rx="1.5" />
                        <path d="M1 5l7 5 7-5" />
                      </svg>
                    </a>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&to=${ref.email}`}
                      target="_blank"
                      rel="noreferrer"
                      className="ref-contact-text main-color"
                      style={{ textDecoration: "none" }}
                    >
                      {ref.email}
                    </a>
                  </div>

                  <div className="ref-contact-item">
                    <div className="ref-contact-icon">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M2 3a1 1 0 011-1h1.5a1 1 0 01.98.8l.5 2.5a1 1 0 01-.29.93L4.5 7.5a9 9 0 004 4l1.27-1.21a1 1 0 01.93-.29l2.5.5a1 1 0 01.8.98V13a1 1 0 01-1 1C6 14 2 10 2 5V3z" />
                      </svg>
                    </div>
                    <span className="ref-contact-text">{ref.phone}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {}
        <div
          className="refs-note"
          style={{ borderLeft: "2px solid var(--main-color, currentColor)" }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            style={{ flexShrink: 0, marginTop: 2 }}
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              stroke="currentColor"
              strokeWidth="1.2"
              className="main-color"
            />
            <path
              d="M10 9v5M10 7v.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              className="main-color"
            />
          </svg>
          <div>
            <p
              className="main-color"
              style={{
                fontSize: "11px",
                fontWeight: 500,
                marginBottom: 6,
                letterSpacing: "0.3px",
              }}
            >
              Note for Scholarship Committee
            </p>
            <p className="refs-note-text">
              Both referees have formally consented and are prepared to provide
              letters of recommendation for a fully funded scholarship
              application upon request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
