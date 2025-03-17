import React, { useEffect, useRef } from "react";
import Tecnologie from "./tecnologie";
import info from "../../info.json";

const Technologies: React.FC<{ language: "english" | "spanish" }> = ({
  language,
}) => {
  const skills = info.skills;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const titles = {
    english: "My Technologies ",
    spanish: "Tecnologías que uso",
  };

  const currentTitle = titles[language];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 0.5; // Ajusta la velocidad del scroll
    const scrollInterval = 20; // Ajusta el intervalo del scroll

    const scroll = () => {
      scrollAmount += scrollStep;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(scroll, scrollInterval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-white font-medium p-8 flex flex-col justify-between items-center">
      <h2 className="text-2xl font-semibold mb-2">{currentTitle}</h2>
      <div className="overflow-hidden w-full" ref={scrollContainerRef}>
        <div className="flex overflow-hidden space-x-6 group">
          <div
            className="flex animate-loop-scroll justify-between gap-6 group-hover:paused "
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
            className="flex animate-loop-scroll justify-between gap-6 group-hover:paused "
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
