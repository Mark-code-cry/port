import "./TechnologyStrip.css";

const technologies = [
  ["Flutter", "flutter"],
  ["Dart", "dart"],
  ["React", "react"],
  ["JavaScript", "javascript"],
  ["PostgreSQL", "postgresql"],
  ["Figma", "figma"],
  ["Visual Studio Code", "vscode"],
  ["Android Studio", "androidstudio"],
].map(([name, slug]) => ({
  name,
  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/" + slug + "/" + slug + "-original.svg",
}));

function LogoSet({ duplicate = false }) {
  return (
    <div
      className={"technology-group" + (duplicate ? " is-duplicate" : "")}
      role={duplicate ? undefined : "list"}
      aria-hidden={duplicate ? "true" : undefined}
    >
      {technologies.map((technology, index) => (
        <div
          className="technology-item"
          role={duplicate ? undefined : "listitem"}
          key={technology.name}
          style={{ "--wave-delay": (index * -0.24) + "s" }}
        >
          <img src={technology.src} alt="" loading="lazy" draggable="false" />
          <span>{technology.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function TechnologyStrip() {
  return (
    <div className="technology-strip" role="region" aria-label="Technology logos" tabIndex={0}>
      <div className="technology-track">
        <LogoSet />
        <LogoSet duplicate />
      </div>
    </div>
  );
}
