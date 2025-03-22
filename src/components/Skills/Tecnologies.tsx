import React, { useEffect, useRef } from "react";
import Tecnologie from "./tecnologie";
import info from "../../info.json";
import DecryptedText from "../DecryptedText/DecryptedText";

const Technologies: React.FC<{ language: "english" | "spanish" }> = ({
  language,
}) => {
  const skills = info.skills;

  return (
    <div id="skills" className="text-white font-medium p-8 flex flex-col justify-between items-center">
      <div className="mt-3 mb-20">
        <DecryptedText
          text={
            language === "english"
              ? "< My Tecnologies />"
              : "< Tecnologias que manejo />"
          }
          speed={60}
          maxIterations={20}
          sequential={true}
          className="text-white text-4xl font-bold sm:text-5xl"
          encryptedClassName="text-4xl font-bold text-blue-500 sm:text-5xl "
          animateOn="view"
          revealDirection="start"
        />
      </div>

      <div className="overflow-hidden w-full">
        <div className="flex overflow-hidden space-x-6 group">
          <div
            className="flex animate-loop-scroll justify-between gap-6 group-hover:paused cursor-pointer"
            aria-hidden="true"
          >
            {skills.programming_languages.map((tech, index) => (
              <Tecnologie key={index} name={tech.name} logoUrl={tech.logo} />
            ))}
            {skills.frameworks_and_tools.map((tool, index) => (
              <Tecnologie key={index} name={tool.name} logoUrl={tool.logo} />
            ))}
          </div>
          <div
            className="flex animate-loop-scroll justify-between gap-6 group-hover:paused cursor-pointer"
            aria-hidden="true"
          >
            {skills.programming_languages.map((tech, index) => (
              <Tecnologie key={index} name={tech.name} logoUrl={tech.logo} />
            ))}
            {skills.frameworks_and_tools.map((tool, index) => (
              <Tecnologie key={index} name={tool.name} logoUrl={tool.logo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
