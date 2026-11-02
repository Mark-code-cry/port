import "./TechnologyStrip.css";

const technologies = [
  { name: "Flutter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/flutter/flutter-original.svg" },
  { name: "Dart", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/dart/dart-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/react/react-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/javascript/javascript-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/postgresql/postgresql-original.svg" },
  { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/figma/figma-original.svg" },
  { name: "Visual Studio Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/vscode/vscode-original.svg" },
  { name: "Android Studio", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/androidstudio/androidstudio-original.svg" },
  { name: "Google Docs", src: "/images/tools/google-docs.svg" },
  { name: "Google Sheets", src: "/images/tools/google-sheets.svg" },
  { name: "Google Drive", src: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/google-drive.svg" },
  { name: "Microsoft Word", src: "/images/tools/microsoft-word.svg" },
  { name: "Microsoft Excel", src: "/images/tools/microsoft-excel.svg" },
  { name: "ChatGPT", src: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/openai-icon.svg" },
];

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
    <div className="technology-strip" role="region" aria-label="Development and productivity tool logos" tabIndex={0}>
      <div className="technology-track">
        <LogoSet />
        <LogoSet duplicate />
      </div>
    </div>
  );
}
