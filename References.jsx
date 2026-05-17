import React from "react";

const references = [
  {
    name: "Masood Anwar",
    designation: "Academic Coordinator",
    department: "Administration",
    institution: "Army Public School & College Attock Cantt",
    relationship: "Academic Coordinator",
    email: "apsacattock@gmail.com",
    phone: "+92 315 910 8910",
  },
  {
    name: "Humaira Naz",
    designation: "Section Head & CS Teacher",
    department: "Computer Science",
    institution: "Army Public School & College Attock Cantt",
    relationship: "Computer Science Teacher",
    email: "Humairanaz620@gmail.com",
    phone: "+92 332 560 4406",
  },
];

export default function References() {
  return (
    <div className="sec-box references section-padding bord-thin-bottom" id="references">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .refs-root { font-family: 'DM Sans', sans-serif; padding: 2rem 0; }

        .refs-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 0.5px solid rgba(255,255,255,0.08);
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
        .refs-title span { color: #1D9E75; }

        .refs-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.04);
          border: 0.5px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 8px 14px;
          flex-shrink: 0;
        }
        .refs-badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #1D9E75;
        }
        .refs-badge-text {
          font-size: 11px;
          color: rgba(255,255,255,0.5);
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
          background: rgba(255,255,255,0.03);
          border: 0.5px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s ease;
        }
        .ref-card:hover { border-color: rgba(255,255,255,0.16); }

        .ref-card-accent {
          height: 2px;
          background: linear-gradient(90deg, #1D9E75, #5DCAA5, #9FE1CB);
          width: 100%;
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
          background: #0F4A36;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 500;
          color: #5DCAA5;
          flex-shrink: 0;
        }
        .ref-name {
          font-size: 15px;
          font-weight: 500;
          color: #ffffff;
          margin: 0 0 3px;
          line-height: 1.3;
        }
        .ref-designation {
          font-size: 11px;
          color: #1D9E75;
          margin: 0;
          font-weight: 400;
        }

        .ref-sep {
          height: 0.5px;
          background: rgba(255,255,255,0.07);
          margin: 0 0 16px;
        }

        .ref-meta-label {
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-bottom: 3px;
        }
        .ref-meta-val {
          font-size: 12px;
          color: rgba(255,255,255,0.6);
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .ref-rel-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(255,255,255,0.04);
          border: 0.5px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 4px 10px;
          font-size: 10px;
          color: rgba(255,255,255,0.4);
          margin-bottom: 16px;
        }
        .ref-rel-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #1D9E75;
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
          width: 26px; height: 26px;
          border-radius: 6px;
          background: rgba(255,255,255,0.04);
          border: 0.5px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ref-contact-text {
          font-size: 11px;
          color: rgba(255,255,255,0.45);
          word-break: break-all;
          text-decoration: none;
        }
        a.ref-contact-text { color: #1D9E75; }
        a.ref-contact-text:hover { text-decoration: underline; }

        .refs-note {
          background: rgba(255,255,255,0.025);
          border: 0.5px solid rgba(255,255,255,0.08);
          border-left: 2px solid #1D9E75;
          border-radius: 0 8px 8px 0;
          padding: 14px 18px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .refs-note-label {
          font-size: 11px;
          font-weight: 500;
          color: #1D9E75;
          margin-bottom: 4px;
          letter-spacing: 0.3px;
        }
        .refs-note-text {
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          line-height: 1.7;
          margin: 0;
        }
      `}</style>

      <div className="refs-root">

        {/* Header */}
        <div className="refs-header">
          <div>
            <p className="refs-eyebrow">Academic &amp; Professional</p>
            <h3 className="refs-title">Refer<span>ences</span></h3>
          </div>
          <div className="refs-badge">
            <div className="refs-badge-dot" />
            <span className="refs-badge-text">Fully funded scholarship</span>
          </div>
        </div>

        {/* Cards */}
        <div className="refs-grid">
          {references.map((ref, i) => {
            const initials = ref.name.split(" ").map(n => n[0]).slice(0, 2).join("");
            return (
              <div key={i} className="ref-card">
                <div className="ref-card-accent" />

                <div className="ref-card-body">
                  <p className="ref-num">Referee 0{i + 1}</p>

                  <div className="ref-avatar-row">
                    <div className="ref-avatar">{initials}</div>
                    <div>
                      <p className="ref-name">{ref.name}</p>
                      <p className="ref-designation">{ref.designation}</p>
                    </div>
                  </div>

                  <div className="ref-sep" />

                  <p className="ref-meta-label">Institution</p>
                  <p className="ref-meta-val">{ref.institution}</p>

                  <p className="ref-meta-label">Department</p>
                  <p className="ref-meta-val">{ref.department}</p>

                  <div className="ref-rel-pill">
                    <span className="ref-rel-dot" />
                    {ref.relationship}
                  </div>

                  <div className="ref-sep" />
                </div>

                <div className="ref-card-footer">
                  <div className="ref-contact-item">
                    <div className="ref-contact-icon">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="1" y="3" width="14" height="10" rx="1.5" />
                        <path d="M1 5l7 5 7-5" />
                      </svg>
                    </div>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&to=${ref.email}`}
                      target="_blank"
                      rel="noreferrer"
                      className="ref-contact-text"
                    >
                      {ref.email}
                    </a>
                  </div>

                  <div className="ref-contact-item">
                    <div className="ref-contact-icon">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
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

        {/* Note */}
        <div className="refs-note">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <circle cx="10" cy="10" r="9" stroke="#1D9E75" strokeWidth="1.2" />
            <path d="M10 9v5M10 7v.5" stroke="#1D9E75" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <div>
            <p className="refs-note-label">Note for Scholarship Committee</p>
            <p className="refs-note-text">
              Both referees have formally consented and are prepared to provide letters of recommendation for a fully funded scholarship application upon request.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
