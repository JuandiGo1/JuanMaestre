import React from "react";
import info from "../../info.json";

const Projects: React.FC<{ language: "english" | "spanish" }> = ({ language }) => {
  const projects = info.projects;

  return (
    <div id="projects" className="text-white font-medium p-8 flex flex-col justify-between items-center">
      <h2 className="text-2xl font-semibold mb-4">
        {language === "english" ? "Projects" : "Proyectos"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project[language].repository}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#121212]/95 text-white  mb-6 border  hover:bg-blue-950 transition-transform transform hover:-translate-y-1 ease-in-out p-0 rounded-xl shadow-lg"
          >
            <div className="overflow-hidden rounded-t-xl">
              <img
                src={project[language].image}
                alt={project[language].name}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">
                {project[language].name}
              </h3>
              <p className="mb-4">
                {project[language].description}
              </p>
              <span className="text-yellow-400 hover:text-yellow-300">
                {language === "english" ? "View Repository" : "Ver Repositorio"}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;