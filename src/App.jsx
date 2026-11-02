import { useState } from "react";
import TechnologyStrip from "./components/TechnologyStrip.jsx";

const projects = [
  {
    type: "WEB DEVELOPMENT",
    number: "01",
    label: "Hamuntu web project logo",
    name: "Hamuntu",
    image: "/images/hamuntu.png",
    description: "HAMUNTU is a web-based platform designed to help individuals discover social and professional communities in Iloilo City. It allows users to explore groups, discover events, connect with organizers, and participate in community activities.",
    technologies: "React.js, JavaScript, Vite, Tailwind CSS, Supabase (PostgreSQL), Leaflet, and Vercel",
    role: "Contributed to the development of responsive interfaces, user-facing features, database integration, and event management functionality.",
    demoUrl: "https://hamuntu.vercel.app/",
    demo: "Live demo",
  },
  {
    type: "MOBILE APPLICATION DEVELOPMENT",
    number: "02",
    label: "GG (Good Game) mobile app logo",
    name: "GG — Good Game",
    image: "/images/whistle.png",
    description: "Good Game is a mobile application designed to help sports enthusiasts discover sporting events, tournaments, and leagues in Iloilo. It connects users with sporting activities and helps organizers manage events more efficiently.",
    technologies: "Flutter, Dart, Supabase, and PostgreSQL",
    role: "Contributed to mobile application development, user interface implementation, authentication, database integration, and application functionality.",
    demoUrl: "https://good-game-website.vercel.app/",
    demo: "Live demo",
  },
];

function SectionHeading({ number, eyebrow, title, accent }) {
  return <div className="section-heading">
    <p className="eyebrow">{number} / {eyebrow}</p>
    <h2>{title}{accent && <><br /><span>{accent}</span></>}</h2>
  </div>;
}

function ProjectPreview({ number, label, image }) {
  return <div className={"project-preview preview-" + number} role="img" aria-label={label}>
    {image ? <img className="project-artwork" src={image} alt="" /> : <div className="preview-window">
      <div className="preview-toolbar"><i></i><i></i><i></i><span>project-preview</span></div>
      <div className="preview-screen">
        <div className="screen-nav"></div>
        <div className="screen-hero"><div className="screen-lines"><i></i><i></i><i></i><b></b></div><div className="screen-art"></div></div>
        <div className="screen-cards"><i></i><i></i><i></i></div>
      </div>
    </div>}
    <span className="preview-label">{label}</span>
  </div>;
}

function ProjectCard({ project }) {
  return <article className="project-card">
    <ProjectPreview number={project.number} label={project.label} image={project.image} />
    <div className="project-body">
      <span className="project-type">{project.type}</span>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <dl className="project-facts">
        <div><dt>Technologies</dt><dd>{project.technologies}</dd></div>
        <div><dt>Role &amp; contributions</dt><dd>{project.role}</dd></div>
      </dl>
      <div className="project-actions">
        <a href={project.demoUrl} target="_blank" rel="noreferrer">{project.demo} <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </article>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navItems = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Education", "#education"], ["Experience", "#experience"], ["Contact", "#contact"]];
  const closeMenu = () => setMenuOpen(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    setIsSubmitting(true);
    setFormMessage("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/markgloria08@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
          _subject: `Portfolio message from ${form.get("name")}`,
          _replyto: form.get("email"),
          _url: window.location.href,
        }),
      });
      const result = await response.json();
      if (!response.ok || String(result.success) !== "true") {
        const serviceMessage = result.message || "The message could not be sent.";
        if (/activation/i.test(serviceMessage)) {
          setFormMessage("Check markgloria08@gmail.com for FormSubmit’s activation email and confirm the form. Then submissions can be delivered.");
        } else {
          setFormMessage(`${serviceMessage} You can also email markgloria08@gmail.com directly.`);
        }
        return;
      }
      formElement.reset();
      setFormMessage("Your message was sent. Thank you for reaching out!");
    } catch {
      setFormMessage("We couldn't connect to the email service. Check your connection and try again, or email markgloria08@gmail.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return <>
    <a className="skip-link" href="#home">Skip to content</a>
    <header className="site-header">
      <div className="container header-inner">
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
            <p className="eyebrow"><span className="status-dot"></span> DEVELOPMENT &amp; ADMINISTRATIVE SUPPORT</p>
            <h1>Mark Arhiel<br /><span>Gloria</span></h1>
            <p className="hero-role">Web &amp; Mobile App Developer | Virtual Assistant</p>
            <p className="hero-intro">I'm an Information Technology graduate with a passion for building functional web and mobile applications while providing reliable administrative and technical support. I enjoy solving problems, organizing information, and learning new technologies that make everyday work more efficient.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">View Projects <span aria-hidden="true">↓</span></a></div>
            <div className="hero-meta"><span><b>Focus</b>Web Development · Mobile Applications · Administrative Support · Technical Assistance</span></div>
          </div>
          <div className="profile-wrap"><div className="profile-frame"><img src="/images/graduate.png" alt="Mark Arhiel Gloria in his graduation gown" /></div><span className="profile-caption">MARK ARHIEL GLORIA</span></div>
        </div>
      </section>

      <section className="section section-tint" id="about"><div className="container">
        <SectionHeading number="01" eyebrow="ABOUT ME" title="Technology, organization," accent="and meaningful solutions." />
        <div className="about-grid">
          <div className="about-copy">
            <p className="about-intro">An IT graduate passionate about developing practical digital solutions and providing reliable technical and administrative support.</p>
            <div className="about-prose">
              <p>I'm Mark Arhiel Gloria, an Information Technology graduate with a background in web and mobile application development. I enjoy transforming ideas into functional, user-friendly applications while continuously improving my technical knowledge and problem-solving abilities.</p>
              <p>Beyond software development, I've also gained practical experience assisting with administrative tasks, including organizing digital files, managing information, maintaining records, and supporting routine client-related responsibilities. These experiences helped me understand the importance of accuracy, efficiency, and organization.</p>
              <p>I believe that being dependable, adaptable, and willing to learn is just as important as having technical skills. Whether I'm developing applications or assisting with daily operations, I approach my responsibilities with attention to detail, patience, and a commitment to delivering quality work.</p>
              <p>What motivates me most is the opportunity to use technology to simplify processes, solve problems, and help individuals or businesses work more efficiently.</p>
              <p>I'm continuously exploring new technologies and productivity tools, including AI-assisted tools such as ChatGPT, to support learning, research, troubleshooting, and improving my workflow.</p>
            </div>
          </div>
          <aside className="personal-details" aria-labelledby="personal-details-heading">
            <h3 id="personal-details-heading">Personal Details</h3>
            <dl className="personal-details-list">
              <div><dt>FULL NAME</dt><dd>Mark Arhiel Gloria</dd></div>
              <div><dt>LOCATION</dt><dd>Philippines</dd></div>
              <div><dt>EMAIL</dt><dd><a href="mailto:markgloria08@gmail.com">markgloria08@gmail.com</a></dd></div>
              <div><dt>PHONE</dt><dd><a href="tel:+639167324945">+63 916 732 4945</a></dd></div>
              <div><dt>PROFESSION</dt><dd>Web &amp; Mobile App Developer | Administrative Support</dd></div>
              <div><dt>EDUCATION</dt><dd>Bachelor of Science in Information Technology</dd></div>
              <div><dt>EXPERIENCE</dt><dd>Web &amp; Mobile Development Projects | Practical Administrative Assistance</dd></div>
              <div><dt>LANGUAGES</dt><dd>English, Filipino</dd></div>
              <div><dt>INTERESTS</dt><dd>Web Development, Mobile Applications, Virtual Assistance, Technical Support, Digital Productivity, AI Tools, and Continuous Learning</dd></div>
            </dl>
          </aside>
        </div>
      </div></section>

      <section className="section section-bluewash technology-section" id="skills"><div className="container">
        <SectionHeading number="02" eyebrow="SKILLS & TOOLS" title="The tools I’m" accent="building with." />
        <TechnologyStrip />
        <p className="section-aside">Beyond development, I'm comfortable using digital productivity tools to organize information, support administrative workflows, and improve efficiency. I also use AI tools such as ChatGPT to support research, learning, troubleshooting, and problem-solving while reviewing outputs for accuracy.</p>
        <div className="about-details">
          <div><span>DEVELOPMENT SKILLS</span><p>Web Application Development · Mobile Application Development · Responsive Web Design · User Interface Development · Database Management · Application Debugging · Technical Troubleshooting · Problem-Solving</p></div>
          <div><span>DEVELOPMENT TOOLS</span><p>Flutter · Dart · React.js · JavaScript · PostgreSQL · Figma · Visual Studio Code · Android Studio</p></div>
          <div><span>VIRTUAL ASSISTANT &amp; ADMINISTRATIVE SKILLS</span><p>Data Entry &amp; Information Management · Document Organization · File Management · Administrative Assistance · Record Keeping · Online Research · Task Organization · Technical Assistance · Time Management · Attention to Detail · AI-Assisted Productivity</p></div>
          <div><span>PRODUCTIVITY TOOLS</span><p>Google Docs · Google Sheets · Google Drive · Microsoft Word · Microsoft Excel · ChatGPT</p></div>
        </div>
      </div></section>

      <section className="section" id="projects"><div className="container">
        <SectionHeading number="03" eyebrow="PROJECTS" title="Selected work" />
        <p className="section-aside">A web platform for discovering local communities and a mobile app for finding sporting events in Iloilo.</p>
        <div className="projects-grid">{projects.map(project => <ProjectCard key={project.number} project={project} />)}</div>
      </div></section>

      <section className="section section-tint" id="education"><div className="container">
        <SectionHeading number="04" eyebrow="EDUCATION" title="Education" />
        <article className="education-card"><div className="education-info"><p className="eyebrow">EDUCATION</p><h3>Bachelor of Science in Information Technology</h3><p>Information Technology Graduate</p></div><div className="education-achievements"><span>ACADEMIC EXPERIENCE</span><p>Developed a foundation in software development, database management, system analysis, web technologies, and mobile application development through academic coursework and practical projects. Applied technical knowledge through collaborative development projects involving responsive web applications, mobile systems, database integration, and user interface design.</p></div></article>
      </div></section>

      <section className="section" id="experience"><div className="container">
        <SectionHeading number="05" eyebrow="EXPERIENCE" title="Experience &" accent="Practical Work." />
        <p className="section-aside">Combining technical development experience with practical administrative support.</p>
        <div className="timeline">
          <article className="timeline-item"><span className="timeline-dot"></span><div className="timeline-top"><div><p className="eyebrow">CATEGORY A / DEVELOPMENT EXPERIENCE</p><h3>Web &amp; Mobile Application Developer</h3><p>Academic &amp; Collaborative Projects</p></div></div><p className="project-description">Worked on the development of web and mobile applications, focusing on functional interfaces, database integration, and user-friendly experiences.</p><ul><li>Collaborated on web and mobile application development projects.</li><li>Assisted in designing responsive user interfaces.</li><li>Worked with application features, databases, and system functionality.</li><li>Identified and resolved technical issues during development.</li><li>Participated in testing, debugging, and improving application performance.</li><li>Projects: HAMUNTU — Web-Based Community Discovery Platform; GG — Good Game Mobile Application.</li></ul></article>
          <article className="timeline-item"><span className="timeline-dot"></span><div className="timeline-top"><div><p className="eyebrow">CATEGORY B / VIRTUAL ASSISTANT &amp; ADMINISTRATIVE EXPERIENCE</p><h3>Administrative Support Assistant</h3><p>Practical Client-Based Assistance</p></div></div><p className="project-description">Provided administrative assistance by helping organize information, manage digital records, and support routine client-related tasks.</p><ul><li>Assisted with data entry and information organization.</li><li>Helped maintain and update digital records.</li><li>Organized documents and files for easier access.</li><li>Supported routine administrative responsibilities.</li><li>Assisted with online research and information management when needed.</li><li>Used digital tools to improve organization and productivity.</li></ul></article>
        </div>
        <p className="section-aside">My administrative experience has helped me develop strong organizational skills, attention to detail, adaptability, and an understanding of the importance of accuracy when handling information.</p>
      </div></section>

      <section className="section contact-section" id="contact"><div className="container contact-grid">
        <div className="contact-copy"><p className="eyebrow">06 / CONTACT</p><h2>Let’s work<br /><span>together.</span></h2><p>Looking for a developer or someone to support your daily operations? I'm open to opportunities in web development, mobile applications, virtual assistance, and technical support. Feel free to reach out!</p>
          <div className="contact-links"><div className="contact-detail"><span>Location</span><strong>Philippines</strong></div><div className="contact-detail"><span>Availability</span><strong>Mon – Fri, 10PM – 4AM PHT</strong></div><a href="mailto:markgloria08@gmail.com"><span>Email</span>markgloria08@gmail.com</a><a href="https://github.com/Mark-code-cry" target="_blank" rel="noreferrer"><span>GitHub</span>github.com/Mark-code-cry</a><a href="tel:+639167324945"><span>Phone</span>+63 916 732 4945</a></div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}><h3>Send a message</h3>
          <label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" type="text" autoComplete="name" required />
          <label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" required />
          <label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows="5" required></textarea>
          <button className="button button-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Send message"}</button>
          {formMessage && <p className="form-status" role="status">{formMessage}</p>}
        </form>
      </div></section>
    </main>

    <footer className="site-footer"><div className="container footer-inner"><a href="#home">Back to top ↑</a><small>© {new Date().getFullYear()} Portfolio</small></div></footer>
  </>;
}

export default App;
