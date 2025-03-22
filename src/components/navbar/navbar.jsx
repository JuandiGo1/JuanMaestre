import React, { useState } from "react";

function Navbar({ language, setLanguage, isMobile }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú hamburguesa
  const usaURL = "src/assets/eng.png";
  const spainURL = "src/assets/spain.png";

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false); // Cierra el menú desplegable
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

  const menuMovilClass = isMenuOpen
    ? "flex bg-[#0a3d80] rounded-b-3xl p-3 w-30 justify-center items-center max-h-screen opacity-100 transition-all duration-300 ease-in-out overflow-hidden"
    : "flex rounded-b-3xl p-3 w-30 justify-center items-center max-h-0 opacity-0 transition-all duration-300 ease-in-out overflow-hidden";

  const items = navItems[language];

  return (
    <nav className="bg-[#0a3d80] px-8 w-full text-xs font-semibold rounded-b-3xl sm:bg-[#0967e1]/50 sm:rounded-b-none sm:rounded-br-2xl sm:text-base sm:font-medium">
      <div className="flex justify-between items-center h-[60px]">
        {/* Hamburguesa */}
        <button
          className="sm:hidden text-white focus:outline-none cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
        </button>

        {/* Menú de navegación */}
        <ul
          className={`${
            menuMovilClass
          } flex-col absolute top-[40px] left-5 sm:flex sm:flex-row sm:static sm:gap-8 sm:w-auto sm:opacity-100 sm:max-h-full`}
        >
          <li className="list-none m-2">
            <a
              href="#about"
              className="text-white font-bold hover:text-yellow-400 transition-transform transform hover:-translate-y-2 ease-in-out px-4 py-2 sm:p-0"
            >
              {items.about}
            </a>
          </li>
          <li className="list-none m-2">
            <a
              href="#skills"
              className="text-white font-bold hover:text-yellow-400 transition-transform transform hover:-translate-y-2 ease-in-out px-4 py-2 sm:p-0"
            >
              {items.skills}
            </a>
          </li>
          <li className="list-none m-2">
            <a
              href="#projects"
              className="text-white font-bold hover:text-yellow-400 transition-transform transform hover:-translate-y-2 ease-in-out px-4 py-2 sm:p-0"
            >
              {items.projects}
            </a>
          </li>
          <li className="list-none m-2">
            <a
              href="#contact"
              className="text-white font-bold hover:text-yellow-400 transition-transform transform hover:-translate-y-2 ease-in-out px-4 py-2 sm:p-0"
            >
              {items.contact}
            </a>
          </li>
        </ul>

        {/* Selector de idioma */}
        <div className="relative ml-4">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-gray-700/80 text-white w-16 py-1 px-2 rounded-xl flex items-center gap-2 sm:py-2 sm:px-4 sm:w-auto"
          >
            <img
              src={language === "english" ? usaURL : spainURL}
              alt={language === "english" ? "English" : "Español"}
              className="w-5 h-5"
            />
            {language === "english"
              ? isMobile
                ? "EN"
                : "English"
              : isMobile
              ? "ES"
              : "Español"}
          </button>
          {isDropdownOpen && (
            <div className="absolute top-10 left-0 bg-gray-800 justify-start pr-4 text-white rounded-lg shadow-lg">
              <button
                onClick={() => handleLanguageChange("english")}
                className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-700"
              >
                <img src={usaURL} alt="English" className="w-5 h-5" />
                {isMobile ? "EN" : "English"}
              </button>
              <button
                onClick={() => handleLanguageChange("spanish")}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 w-full text-left"
              >
                <img src={spainURL} alt="Español" className="w-5 h-5" />
                {isMobile ? "ES" : "Español"}
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
