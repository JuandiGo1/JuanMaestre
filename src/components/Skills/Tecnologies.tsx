import React from "react";
import Tecnologie from "./tecnologie";
import info from "../../info.json";

const Technologies: React.FC<{ language: "english" | "spanish" }> = ({ language }) => {
  const skills = info.skills;

  const titles = {
    english: "Technologies I use",
    spanish: "Tecnologías que uso"
  };

  const currentTitle = titles[language];

  return (
    <div className="text-white font-medium p-8 flex flex-col justify-between items-center">
      <h2 className="text-2xl font-semibold mb-2">{currentTitle}</h2>
      <div className="grid grid-cols-5 gap-4">
        {skills.programming_languages.map((tech, index) => (
          <Tecnologie key={index} name={tech} />
        ))}
        {skills.frameworks_and_tools.map((tool, index) => (
          <Tecnologie key={index} name={tool} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;