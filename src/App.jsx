import { useState } from "react";
import TechnologyStrip from "./components/TechnologyStrip.jsx";

const projects = [
  { type: "WEB PROJECT", number: "01", label: "Web project placeholder", name: "[Web project name]", demo: "Live demo" },
  { type: "MOBILE APP", number: "02", label: "Mobile project placeholder", name: "[Mobile app name]", demo: "APK / demo" },
  { type: "WEB OR MOBILE", number: "03", label: "Sample project placeholder", name: "[Another project name]", demo: "Live demo" },
];

function BrandMark({ footer = false }) {
  return <a className={"brand-mark" + (footer ? " footer-brand" : "")} href="#home" aria-label="MAG — back to home">
    <svg viewBox="0 0 54 42" role="img" aria-label="MAG monogram">
      <rect x="1" y="1" width="52" height="40" rx="10" fill="currentColor" />
      <text x="7" y="27" fill="#fff" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fontSize="16" letterSpacing="-1.2">MAG</text>
    </svg>
    <span className="brand-word">Mark <b>Gloria</b></span>
  </a>;
}

function SectionHeading({ number, eyebrow, title, accent }) {
  return <div className="section-heading">
    <p className="eyebrow">{number} / {eyebrow}</p>
    <h2>{title}<br /><span>{accent}</span></h2>
  </div>;
}

function ProjectPreview({ number, label }) {
  return <div className={"project-preview preview-" + number} role="img" aria-label={label}>
    <div className="preview-window">
      <div className="preview-toolbar"><i></i><i></i><i></i><span>project-preview</span></div>
      <div className="preview-screen">
        <div className="screen-nav"></div>
        <div className="screen-hero"><div className="screen-lines"><i></i><i></i><i></i><b></b></div><div className="screen-art"></div></div>
        <div className="screen-cards"><i></i><i></i><i></i></div>
      </div>
    </div>
    <span className="preview-label">{label}</span>
  </div>;
}

function ProjectCard({ project }) {
  return <article className="project-card">
    <ProjectPreview number={project.number} label={project.label} />
    <div className="project-body">
      <span className="project-type">{project.type} · PLACEHOLDER</span>
      <h3>{project.name}</h3>
      <p className="project-description">[Add a short description of the project, its purpose, and the problem it solves.]</p>
      <dl className="project-facts">
        <div><dt>Technologies</dt><dd>[Add the technologies used]</dd></div>
        <div><dt>Role &amp; contributions</dt><dd>[Describe your role and verified contributions]</dd></div>
      </dl>
      <div className="project-actions">
        <a href="https://github.com/YOUR-USERNAME/PROJECT-NAME" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        <a href="https://your-demo.example.com" target="_blank" rel="noreferrer">{project.demo} <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </article>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const navItems = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Education", "#education"], ["Experience", "#experience"], ["Certifications", "#certifications"], ["Contact", "#contact"]];
  const closeMenu = () => setMenuOpen(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent("Portfolio contact from " + name);
    const body = encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message);
    setFormMessage("Opening your email app. Replace YOUR.EMAIL@example.com with your email address.");
    window.location.href = "mailto:YOUR.EMAIL@example.com?subject=" + subject + "&body=" + body;
  }

  return <>
    <a className="skip-link" href="#home">Skip to content</a>
    <header className="site-header">
      <div className="container header-inner">
        <BrandMark />
        <button className={"menu-toggle" + (menuOpen ? " is-open" : "")} type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}><span></span><span></span><span></span></button>
        <nav id="site-nav" className={"site-nav" + (menuOpen ? " is-open" : "")} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        </nav>
      </div>
    </header>

    <main id="home">
      <section className="hero section-pad">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot"></span> WEB &amp; MOBILE DEVELOPMENT</p>
            <h1>Mark Arhiel<br /><span>Gloria</span></h1>
            <p className="hero-role">Web &amp; Mobile App Developer</p>
            <p className="hero-intro">I build responsive websites and mobile applications that turn ideas into practical, user-friendly experiences.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">View Projects <span aria-hidden="true">↓</span></a><a className="button button-outline" href="/resume.pdf" download>Download Resume <span aria-hidden="true">↓</span></a></div>
            <p className="placeholder-note">Resume placeholder: add your PDF at <code>public/resume.pdf</code>.</p>
            <div className="hero-meta"><span><b>Location</b>[Add your location]</span><span><b>Focus</b>Web · Mobile · Interface design</span></div>
          </div>
          <div className="profile-wrap"><div className="profile-frame"><img src="/images/graduate.png" alt="Mark Arhiel Gloria in his graduation gown" /></div><span className="profile-caption">MARK ARHIEL GLORIA</span></div>
        </div>
      </section>

      <section className="section section-tint" id="about"><div className="container">
        <SectionHeading number="01" eyebrow="ABOUT ME" title="Web, mobile," accent="and thoughtful interfaces." />
        <div className="about-grid"><p className="section-lead">I’m interested in building for the web and mobile, with care for how an interface feels as well as how it works.</p>
          <div className="about-details"><div><span>BACKGROUND</span><p>[Add a brief personal introduction.]</p></div><div><span>LOCATION</span><p>[Add your city and country.]</p></div><div><span>INTERESTS</span><p>Web development · Mobile applications · Interface design</p></div><div><span>CAREER GOAL</span><p>[Describe the roles and goals you are working toward.]</p></div></div>
        </div>
      </div></section>

      <section className="section section-bluewash technology-section" id="skills"><div className="container">
        <SectionHeading number="02" eyebrow="SKILLS & TOOLS" title="The tools I’m" accent="building with." />
        <TechnologyStrip />
      </div></section>

      <section className="section" id="projects"><div className="container">
        <SectionHeading number="03" eyebrow="PROJECTS" title="Selected work" accent="(placeholders)." />
        <p className="section-aside">Sample project cards only. Replace each screenshot, project detail, and link with your own work.</p>
        <div className="projects-grid">{projects.map(project => <ProjectCard key={project.number} project={project} />)}</div>
      </div></section>

      <section className="section section-tint" id="education"><div className="container">
        <SectionHeading number="04" eyebrow="EDUCATION" title="Education &" accent="achievements." />
        <article className="education-card"><div className="education-mark" aria-hidden="true">ED<span>.</span></div><div className="education-info"><p className="eyebrow">DEGREE / PROGRAM</p><h3>[Add your degree]</h3><p>[Add your school]</p></div><div className="education-year"><span>GRADUATION YEAR</span><b>[Year]</b></div><div className="education-achievements"><span>ACADEMIC ACHIEVEMENTS</span><p>[Add verified academic achievements, or remove this line if none apply.]</p></div></article>
      </div></section>

      <section className="section" id="experience"><div className="container">
        <SectionHeading number="05" eyebrow="EXPERIENCE" title="Experience" accent="(placeholders)." />
        <p className="section-aside">Add internship, employment, or freelance experience. Keep only verified details.</p>
        <div className="timeline"><article className="timeline-item"><span className="timeline-dot"></span><div className="timeline-top"><div><p className="eyebrow">ROLE / EXPERIENCE TYPE</p><h3>[Add your role]</h3><p>[Organization or client]</p></div><span className="timeline-date">[Start date – end date]</span></div><ul><li>[Describe a verified contribution or responsibility.]</li><li>[Add another contribution, or remove this line.]</li></ul></article></div>
      </div></section>

      <section className="section section-bluewash" id="certifications"><div className="container">
        <SectionHeading number="06" eyebrow="CERTIFICATIONS" title="Learning &" accent="certifications." />
        <div className="cert-grid"><article className="cert-card"><span className="cert-symbol" aria-hidden="true">✓</span><div><h3>[Certificate title]</h3><p>[Issuing organization]</p></div><time>[Completion date]</time></article><p className="placeholder-note cert-note">Replace this card with a completed certificate. Remove it if you have none to list.</p></div>
      </div></section>

      <section className="section contact-section" id="contact"><div className="container contact-grid">
        <div className="contact-copy"><p className="eyebrow">07 / CONTACT</p><h2>Let’s make<br /><span>something useful.</span></h2><p>Have an opportunity or a project in mind? Send me a note.</p>
          <div className="contact-links"><a href="mailto:YOUR.EMAIL@example.com"><span>Email</span>YOUR.EMAIL@example.com <b aria-hidden="true">↗</b></a><a href="https://github.com/YOUR-USERNAME" target="_blank" rel="noreferrer"><span>GitHub</span>github.com/YOUR-USERNAME <b aria-hidden="true">↗</b></a><a href="https://www.linkedin.com/in/YOUR-USERNAME" target="_blank" rel="noreferrer"><span>LinkedIn</span>linkedin.com/in/YOUR-USERNAME <b aria-hidden="true">↗</b></a></div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}><h3>Send a message</h3>
          <label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Name" required />
          <label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          <label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows="5" placeholder="What would you like to talk about?" required></textarea>
          <button className="button button-primary" type="submit">Send message <span aria-hidden="true">↗</span></button>
          <p className="form-note">The form opens your email app. Replace the placeholder email in the source. For direct website submissions, connect a form service or backend.</p>
          {formMessage && <p className="form-status" role="status">{formMessage}</p>}
        </form>
      </div></section>
    </main>

    <footer className="site-footer"><div className="container footer-inner"><BrandMark footer /><p>Built with care by Mark Arhiel Gloria.</p><a href="#home">Back to top ↑</a><small>© {new Date().getFullYear()} Mark Arhiel Gloria</small></div></footer>
  </>;
}

export default App;
