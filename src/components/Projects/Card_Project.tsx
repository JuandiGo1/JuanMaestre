import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const Card_Project: React.FC<{
  project: any;
  language: "english" | "spanish";
}> = ({ project, language }) => {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <motion.a
          ref={ref}
          href={project[language].repository}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#121212]/95 text-white mb-6 border hover:bg-blue-950 transition-transform transform hover:-translate-y-1 ease-in-out p-0 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.1 } }}
        >
          <div className="overflow-hidden rounded-t-xl">
            <img
              src={project[language].image}
              alt={project[language].name}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{project[language].name}</h3>
            <p className="mb-4">{project[language].description}</p>
            <span className="text-blue-500 hover:text-yellow-300">
              {language === "english" ? "View More" : "Ver Más"}
            </span>
          </div>
        </motion.a>
      )}
    </InView>
  );
};

export default Card_Project;
