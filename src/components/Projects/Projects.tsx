import React from "react";
import info from "../../info.json";
import DecryptedText from "../DecryptedText/DecryptedText";
import Card_Project from "./Card_Project";

const Projects: React.FC<{ language: "english" | "spanish" }> = ({
  language,
}) => {
  const projects = info.projects;

  return (
    <div
      id="projects"
      className="text-white font-medium p-8 flex flex-col justify-between items-center"
    >
      <div className="mt-8 mb-10">
        <DecryptedText
          text={language === "english" ? "< Projects />" : "< Proyectos/>"}
          speed={60}
          maxIterations={20}
          sequential={true}
          className="text-white text-5xl font-bold"
          encryptedClassName="text-5xl font-bold text-blue-500"
          animateOn="view"
          revealDirection="start"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        {projects.map((project, index) => (
          <Card_Project key={index} project={project} language={language} />
        ))}
      </div>

      <a href="https://github.com/JuandiGo1" className="text-white text-2xl underline hover:text-yellow-500" target="_blank" rel="noopener noreferrer">
        {language === "english" ? "View more on GitHub" : "Ver más en GitHub"}
      </a>
    </div>
  );
};

export default Projects;
