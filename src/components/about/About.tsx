import React, { useState } from "react";
import { motion } from "framer-motion";
import info from "../../info.json";
import DecryptedText from "../DecryptedText/DecryptedText";

const About: React.FC<{ language: "english" | "spanish" }> = ({ language }) => {
  const profile = info.profile[language];
  const contact = info.contact;
  const skills = info.skills;

  const titles = {
    english: {
      aboutMe: "About me",
      technologies: "Technologies",
      greeting: "Hi! I'm Juan Maestre",
      cv_route: "public/CV Juan Maestre English.pdf",
      downloadCV: "Download CV",
    },
    spanish: {
      aboutMe: "Sobre mí",
      technologies: "Tecnologías que uso",
      greeting: "Hola! Soy Juan Maestre",
      cv_route: "public/Juan Maestre CV Spanish.pdf",
      downloadCV: "Descargar HV",
    },
  };

  const currentTitles = titles[language];

  return (
    <div className="text-white font-medium p-8 flex flex-col justify-between items-center">
      <div className="mt-1 mb-10 sm:mt-10 ">
        <DecryptedText
          text={currentTitles.greeting}
          speed={80}
          maxIterations={20}
          sequential={true}
          className="revealed text-5xl font-bold sm:text-6xl"
          encryptedClassName="text-5xl font-bold text-blue-500 sm:text-6xl"
          animateOn="view"
          revealDirection="start"
        />
        <div className="flex justify-center items-center mt-4 gap-[20px]">
          <motion.a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <i className="fa-brands fa-square-github text-gray-50 text-4xl"></i>
          </motion.a>
          <motion.a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <i className="fa-brands fa-linkedin text-gray-50 text-4xl"></i>
          </motion.a>
          <motion.a
            href={currentTitles.cv_route}
            download
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <i className="fa-solid fa-download text-white mr-1"> </i>
            {currentTitles.downloadCV}
          </motion.a>
        </div>
      </div>

      {/* About me */}
      <motion.div
        key={language}
        className="mb-4 mt-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">{`< ${currentTitles.aboutMe} />`}</h1>
        <p className="text-[15px] text-justify m-4 sm:text-center sm:text-[1.125rem] sm:max-[58rem]:text-justify">{profile.description}</p>
      </motion.div>

    </div>
  );
};

export default About;
