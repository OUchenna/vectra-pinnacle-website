import { useState } from "react";
import "./App.css";

const DIVISIONS = [
  {
    code: "A · F",
    name: "Construction & Building Materials",
    summary:
      "General contracting and works — roads, bridges, pipelines, reservoirs and housing — alongside manufacture and supply of plumbing fittings, tiles, marble and cement.",
  },
  {
    code: "C · D",
    name: "Agriculture & Agro-Allied",
    summary:
      "Farming, irrigation and environmental services paired with agro-allied equipment, fertilisers, livestock feed, and preservation of farm produce.",
  },
  {
    code: "B · E · G · H · I",
    name: "Trade, Retail & Distribution",
    summary:
      "Import, export and general merchandising; supermarkets and departmental stores; logistics and commission agency; cold-chain and frozen foods.",
  },
  {
    code: "J",
    name: "Technology & Digital Services",
    summary:
      "IT consultancy, digital marketing, and bespoke technology solutions — plus a digital marketplace connecting buyers and sellers of goods and services.",
  },
  {
    code: "K",
    name: "Corporate & Advisory Services",
    summary:
      "Managerial and administrative advisory support to affiliate companies and third parties across the Group's operating footprint.",
  },
  {
    code: "L · M",
    name: "Real Estate & Property",
    summary:
      "Acquisition, development and management of land and buildings — property development, letting, and estate management services.",
  },
];

function PinnacleDiagram() {
  const apex = { x: 320, y: 46 };
  const baseline = 300;
  const base = [
    { x: 30, y: baseline, label: "CONSTRUCTION", code: "A·F" },
    { x: 148, y: baseline, label: "AGRICULTURE", code: "C·D" },
    { x: 234, y: baseline, label: "TRADE & RETAIL", code: "B·E·G·H·I" },
    { x: 406, y: baseline, label: "TECHNOLOGY", code: "J" },
    { x: 492, y: baseline, label: "ADVISORY", code: "K" },
    { x: 610, y: baseline, label: "REAL ESTATE", code: "L·M" },
  ];

  return (
    <svg
      viewBox="0 0 640 380"
      className="pinnacle-diagram"
      role="img"
      aria-label="Diagram of six business divisions converging to a single apex, representing Vectra Pinnacle Ventures Limited"
    >
      <line x1="14" y1={baseline} x2="626" y2={baseline} className="pd-baseline" />
      {base.map((b, i) => (
        <line
          key={b.label}
          x1={b.x}
          y1={b.y}
          x2={apex.x}
          y2={apex.y}
          className="pd-vector"
          style={{ animationDelay: `${i * 90}ms` }}
        />
      ))}
      <circle cx={apex.x} cy={apex.y} r="5" className="pd-apex" />
      {base.map((b) => (
        <circle key={b.label + "-node"} cx={b.x} cy={b.y} r="3.5" className="pd-node" />
      ))}
      {base.map((b) => (
        <text key={b.label + "-label"} x={b.x} y={b.y + 24} textAnchor="middle" className="pd-label">
          <tspan className="pd-label-code">{b.code}</tspan>
          <tspan x={b.x} dy="13" className="pd-label-name">
            {b.label}
          </tspan>
        </text>
      ))}
      <text x={apex.x} y={apex.y - 16} textAnchor="middle" className="pd-apex-label">
        ONE VANTAGE POINT
      </text>
    </svg>
  );
}

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="page">
      <div className="grid-backdrop" aria-hidden="true" />

      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="brand">
            <img src="/logo-full.png" alt="Vectra Pinnacle Ventures Limited" className="brand-logo" />
          </a>
          <button
            className="nav-toggle"
            aria-expanded={navOpen}
            aria-label="Toggle navigation"
            onClick={() => setNavOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`nav-links ${navOpen ? "open" : ""}`}>
            <a href="#divisions" onClick={() => setNavOpen(false)}>
              Divisions
            </a>
            <a href="#registration" onClick={() => setNavOpen(false)}>
              Registration
            </a>
            <a href="#contact" className="nav-cta" onClick={() => setNavOpen(false)}>
              Get in touch
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Memorandum of Association &middot; Federal Republic of Nigeria</p>
              <h1 className="hero-title">
                Six industries.
                <br />
                One pinnacle.
              </h1>
              <p className="hero-sub">
                Vectra Pinnacle Ventures Limited is a Nigerian enterprise built to operate across
                construction, agriculture, trade, technology, advisory and real estate &mdash;
                distinct lines of business, converging on a single set of standards.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">
                  Start a conversation
                </a>
                <a href="#divisions" className="btn btn-ghost">
                  View the divisions
                </a>
              </div>
            </div>
            <div className="hero-diagram">
              <PinnacleDiagram />
            </div>
          </div>
        </section>

        <section id="registration" className="cert">
          <div className="wrap cert-inner">
            <div className="cert-col">
              <span className="cert-label">Company name</span>
              <span className="cert-value">Vectra Pinnacle Ventures Limited</span>
            </div>
            <div className="cert-col">
              <span className="cert-label">Registered office</span>
              <span className="cert-value">Crown Plaza, Utako, Abuja</span>
            </div>
            <div className="cert-col">
              <span className="cert-label">Governing instrument</span>
              <span className="cert-value">Memorandum &amp; Articles of Association</span>
            </div>
          </div>
        </section>

        <section id="divisions" className="divisions">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Where the business operates</p>
              <h2 className="section-title">Six divisions, one Memorandum</h2>
              <p className="section-sub">
                The Company operates across six divisions spanning construction, agriculture,
                trade, technology, advisory and real estate.
              </p>
            </div>
            <div className="division-grid">
              {DIVISIONS.map((d) => (
                <article className="division-card" key={d.name}>
                  <span className="division-code">CL. {d.code}</span>
                  <h3 className="division-name">{d.name}</h3>
                  <p className="division-summary">{d.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap contact-inner">
            <div>
              <p className="eyebrow">Reach the Company</p>
              <h2 className="section-title contact-title">Let's talk about working together</h2>
              <p className="section-sub contact-sub">
                Reach out to the Company using the details below.
              </p>
            </div>
            <dl className="contact-grid">
              <div>
                <dt>Registered office</dt>
                <dd>Crown Plaza, Utako, Abuja</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>contact@vectrapinnacle.com</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span>
            &copy; {new Date().getFullYear()} Vectra Pinnacle Ventures Limited. Incorporated in
            Nigeria.
          </span>
          <span className="footer-mark">
            <img src="/logo-icon.png" alt="" className="footer-mark-icon" /> Vectra Pinnacle
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
