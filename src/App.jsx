const projects = [
  { number: "01", title: "A quieter kind of planning", type: "Product design · Concept", year: "2025", art: "planner" },
  { number: "02", title: "Objects for everyday rituals", type: "Brand identity · Concept", year: "2024", art: "objects" },
  { number: "03", title: "A place to find your people", type: "Web design · Concept", year: "2024", art: "community" },
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

function App() {
  return (
    <main>
      <header className="topbar wrap">
        <a className="wordmark" href="#top" aria-label="Your Name, home">YN<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact <Arrow diagonal /></a>
        </nav>
      </header>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="availability-dot" /> INDEPENDENT DESIGNER &amp; DEVELOPER</p>
          <h1>Thoughtful digital work, <em>made with care.</em></h1>
          <p className="intro">I turn good ideas into useful, clear, and quietly distinctive experiences for the web.</p>
          <a className="text-link" href="#work">Explore selected work <Arrow /></a>
        </div>
        <div className="hero-photo">
          <img src="/images/graduate.png" alt="Graduate wearing a blue gown and sash" />
        </div>
      </section>

      <section className="work-section wrap" id="work">
        <div className="section-heading"><div><p className="eyebrow">A FEW RECENT IDEAS</p><h2>Selected work<span className="accent">.</span></h2></div><p className="heading-note">A small collection of self-initiated concept projects.<br />Replace these with your own work.</p></div>
        <div className="project-list">
          {projects.map((project) => <article className="project" key={project.number}>
            <div className={`project-art ${project.art}`} aria-hidden="true">
              {project.art === "planner" && <><div className="paper"><span className="paper-line long"></span><span className="paper-line"></span><span className="paper-line short"></span><div className="paper-sun"></div></div><span className="floating-tag">take your time</span></>}
              {project.art === "objects" && <><div className="object object-a"></div><div className="object object-b"></div><div className="object object-c"></div><span className="object-label">FORM / 04</span></>}
              {project.art === "community" && <><div className="community-circle circle-a">hello</div><div className="community-circle circle-b">there</div><div className="community-circle circle-c">again</div><span className="community-scribble">make room for more ↗</span></>}
            </div>
            <div className="project-info"><div><span className="project-number">{project.number} / {project.year}</span><h3>{project.title}</h3><p>{project.type}</p></div><a href="#contact" aria-label={`Ask about ${project.title}`}><Arrow diagonal /></a></div>
          </article>)}
        </div>
      </section>

      <section className="about-section" id="about"><div className="wrap about-inner"><p className="eyebrow">A LITTLE ABOUT ME</p><div className="about-copy"><h2>Curious by nature.<br /><em>Careful by design.</em></h2><div><p>I’m a multidisciplinary creative who enjoys making the complicated feel simple. My process is collaborative, considered, and always grounded in the people who will use what we make.</p><p>From the first sketch to the final detail, I bring a thoughtful eye and a practical mindset to every project.</p><a className="text-link" href="#contact">More about working together <Arrow /></a></div></div><div className="skill-row"><span>WHAT I DO</span><p>Digital design <i>·</i> Front-end development <i>·</i> Creative direction</p></div></div></section>

      <footer id="contact"><div className="wrap footer-inner"><div><p className="eyebrow">HAVE A GOOD ONE IN MIND?</p><h2>Let’s make it<br /><em>mean something.</em></h2></div><a className="contact-button" href="mailto:hello@example.com">Say hello <Arrow diagonal /></a><div className="footer-bottom"><a className="wordmark" href="#top">YN<span>.</span></a><span>Independent &amp; available for select projects</span><span>© 2025 Your Name</span></div></div></footer>
    </main>
  );
}

export default App;
