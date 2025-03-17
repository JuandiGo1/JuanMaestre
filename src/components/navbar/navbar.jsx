import React from "react";

function Navbar({ language, setLanguage }) {
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const navItems = {
    english: {
      about: "ABOUT",
      skills: "SKILLS",
      projects: "PROJECTS",
      contact: "CONTACT",
      language: "Language",
    },
    spanish: {
      about: "SOBRE MÍ",
      skills: "HABILIDADES",
      contact: "CONTACTO",
      projects: "PROYECTOS",
      language: "Idioma",
    },
  };

  const items = navItems[language];

  return (
    <nav className="bg-[#0967e1]/50 px-8 w-full flex justify-between items-center h-[60px] text-base font-medium rounded-br-xl">
      {/* Navigation Links */}
      <ul className="flex gap-8">
        <li className="list-none">
          <a
            href="#about"
            className="text-white font-bold hover:text-yellow-400 transition-transform transform hover:-translate-y-2 ease-in-out"
          >
            {items.about}
          </a>
        </li>
        <li className="list-none">
          <a
            href="#skills"
            className="text-white font-bold hover:text-yellow-400 transition-transform transform hover:-translate-y-2 ease-in-out"
          >
            {items.skills}
          </a>
        </li>
        <li className="list-none">
          <a
            href="#projects"
            className="text-white font-bold hover:text-yellow-400 transition-transform transform hover:-translate-y-2 ease-in-out"
          >
            {items.projects}
          </a>
        </li>
        <li className="list-none">
          <a
            href="#contact"
            className="text-white font-bold hover:text-yellow-400 transition-transform transform hover:-translate-y-2 ease-in-out"
          >
            {items.contact}
          </a>
        </li>
      </ul>

      {/* Language Selector */}
      <div className="flex items-center gap-4">
        <label
          htmlFor="language"
          className="text-white font-bold hover:text-yellow-400"
        >
          {items.language}:
        </label>
        <select
          id="language"
          value={language}
          onChange={handleLanguageChange}
          className="bg-gray-700/80 text-white p-1 rounded-xl"
        >
          <option className="bg-gray-800 font-bold" value="spanish">
            ES
          </option>
          <option className="bg-gray-800 font-bold" value="english">
            EN
          </option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
