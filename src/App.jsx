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

const OBJECTS = [
  { code: "A", text: "To carry on the business of general contractors and general merchants." },
  {
    code: "B",
    text: "To buy, sell, manufacture and deal in all articles, substances, products, systems and appliances that will enable it realise its set objectives, or that are commonly bought, sold, manufactured or dealt in by persons carrying on any business with objects similar to the Company's.",
  },
  {
    code: "C",
    text: "To carry on any or all of the business of agriculture, agro-business, publishers, agricultural and environmental service, and irrigators; to manufacture and supply tinned foods, confections, confectionery and food products of all description.",
  },
  {
    code: "D",
    text: "To carry on business as manufacturers and dealers in agro-allied equipment and supplies, including farm implements and machinery, fertilisers, agrochemicals and livestock feeds; and to engage in the preservation and processing of farm and agricultural produce and products.",
  },
  {
    code: "E",
    text: "To establish and acquire trading outlets, supermarkets, provision stores and departmental stores for the sale of all kinds of products, whether by wholesale or retail, as manufacturers, distributors or proprietors.",
  },
  {
    code: "F",
    text: "To carry on the business of construction services and production of plumbing materials, taps, fittings, tiles, marbles, jacuzzis, basins, pipes and cement; to supply building materials; and to undertake building services, rehabilitation, renovation, maintenance, alteration, and the lease or hire of construction equipment, plant and machinery — including the construction of railways, tramways, roads, houses, pipelines, docks, canals, bridges, storage accommodation, reservoirs and piers.",
  },
  {
    code: "G",
    text: "To buy, sell, export, import, prepare for market and deal in all kinds of goods and raw materials in any part of the world, and generally to carry on the business of general merchants and industrialists.",
  },
  {
    code: "H",
    text: "To carry on the business of trading, marketing, sales and distribution of general goods, logistics, commission agency, manufacturers' representation, general supply and general contracting.",
  },
  {
    code: "I",
    text: "To buy and sell frozen foods, operate cold-rooms, and manufacture and deal in all articles, substances, products, commodities and appliances used in connection with the Company's business.",
  },
  {
    code: "J",
    text: "To engage in information technology consultancy, and in collections and recoveries innovation; to engage in digital marketing of commodities and services; to develop information technology solutions for the Company and third parties; and to act as digital intermediary introducing digital buyers and sellers of products, goods and services.",
  },
  {
    code: "K",
    text: "To provide managerial and administrative advice, service and assistance to any company in which the Company is interested, and to any other companies or persons.",
  },
  {
    code: "L",
    text: "To carry on the business of real estate, landed property, property management and property development, and to employ the services of estate managers and solicitors.",
  },
  {
    code: "M",
    text: "To acquire land, buildings and real estate of any description — including easements and other proprietary rights — and to hold, improve, alter, develop, let, sell or otherwise dispose of the same.",
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
  const [openClause, setOpenClause] = useState(null);
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
            <a href="#objects" onClick={() => setNavOpen(false)}>
              Objects A&ndash;M
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
              <span className="cert-value">Federal Republic of Nigeria</span>
            </div>
            <div className="cert-col">
              <span className="cert-label">Governing instrument</span>
              <span className="cert-value">Memorandum &amp; Articles of Association</span>
            </div>
            <div className="cert-col">
              <span className="cert-label">Objects clauses</span>
              <span className="cert-value">A &ndash; M, thirteen in number</span>
            </div>
          </div>
        </section>

        <section id="divisions" className="divisions">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Where the business operates</p>
              <h2 className="section-title">Six divisions, one Memorandum</h2>
              <p className="section-sub">
                The Company's objects clauses (A&ndash;M) cover thirteen permitted activities. In
                practice, they group into six operating divisions.
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

        <section id="objects" className="objects">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">In full, as filed</p>
              <h2 className="section-title">The objects clause, A&ndash;M</h2>
              <p className="section-sub">
                The complete, unabridged text of clause 3 of the Memorandum of Association.
              </p>
            </div>
            <div className="clause-list">
              {OBJECTS.map((o) => {
                const isOpen = openClause === o.code;
                return (
                  <div className={`clause ${isOpen ? "is-open" : ""}`} key={o.code}>
                    <button
                      className="clause-trigger"
                      aria-expanded={isOpen}
                      onClick={() => setOpenClause(isOpen ? null : o.code)}
                    >
                      <span className="clause-code">{o.code}</span>
                      <span className="clause-preview">{o.text.split(".")[0]}.</span>
                      <span className="clause-chevron" aria-hidden="true">
                        {isOpen ? "\u2212" : "+"}
                      </span>
                    </button>
                    {isOpen && <p className="clause-body">{o.text}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap contact-inner">
            <div>
              <p className="eyebrow">Reach the Company</p>
              <h2 className="section-title contact-title">Let's talk about working together</h2>
              <p className="section-sub contact-sub">
                Replace the details below with the Company's registered contact information before
                publishing this site.
              </p>
            </div>
            <dl className="contact-grid">
              <div>
                <dt>Registered office</dt>
                <dd>[Company address, Nigeria]</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>info@vectrapinnacle.com</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>[+234 000 000 0000]</dd>
              </div>
              <div>
                <dt>CAC registration</dt>
                <dd>[RC number]</dd>
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
