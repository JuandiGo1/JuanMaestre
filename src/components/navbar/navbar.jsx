import React, { useState, useEffect, useRef } from "react";

function Navbar({ language, setLanguage, isMobile }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú hamburguesa
  const [shouldClose, setShouldClose] = useState(false); // Estado para manejar el cierre
  const usaURL = "/assets/eng.png";
  const spainURL = "/assets/spain.png";

  const dropdownRef = useRef(null); // Referencia al contenedor del selector de idiomas

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false); // Cierra el menú desplegable
  };

  // Cierra el selector de idiomas o el menú hamburguesa al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setShouldClose(true); // Marca que el menú debe cerrarse
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Efecto para cerrar el menú cuando `shouldClose` es true
  useEffect(() => {
    if (shouldClose) {
      setIsMenuOpen(false); // Cierra el menú hamburguesa
      setShouldClose(false); // Resetea el estado
    }
  }, [shouldClose]);

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
    <nav className="max-[960px]:bg-[#0a3d80] px-8 sm:px-2 w-full text-xs font-semibold rounded-b-4xl lg:bg-[#0967e1]/50 lg:rounded-b-none lg:rounded-br-4xl sm:text-base md:font-medium">
      <div className="flex justify-between lg:justify-evenly items-center h-[60px]">
        {/* Hamburguesa */}
        <button
          className="sm:hidden text-white focus:outline-none cursor-pointer"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen); // Alterna el estado del menú
            setShouldClose(false); // Resetea el estado de cierre
          }}
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
        </button>

        {/* Menú de navegación */}
        <ul
          ref={dropdownRef}
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
        <div ref={dropdownRef} className="relative ml-4 ">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-gray-700/80 text-white w-16 py-1 px-2 rounded-xl flex items-center gap-2 sm:py-2 sm:px-4 sm:w-auto cursor-pointer"
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
            <div className="absolute top-10 left-0 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden w-full">
              <button
                onClick={() => handleLanguageChange("english")}
                className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-700 cursor-pointer"
              >
                <img src={usaURL} alt="English" className="w-5 h-5" />
                {isMobile ? "EN" : "English"}
              </button>
              <button
                onClick={() => handleLanguageChange("spanish")}
                className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-700 cursor-pointer"
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
