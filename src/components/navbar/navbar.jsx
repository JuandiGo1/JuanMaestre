import React from "react";

function Navbar({ language, setLanguage }) {
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const navItems = {
    english: {
      home: "HOME",
      about: "ABOUT",
      skills: "SKILLS",
      contact: "CONTACT",
      language: "Language"
    },
    spanish: {
      home: "INICIO",
      about: "SOBRE MÍ",
      skills: "HABILIDADES",
      contact: "CONTACTO",
      language: "Idioma"
    }
  };

  const items = navItems[language];

  return (
    <nav className="bg-[#0967e1]/50 px-16 w-full flex justify-between items-center h-[60px] text-base font-medium rounded-br-xl">
      {/* Navigation Links */}
      <ul className="flex gap-8">
        <li className="list-none">
          <a href="#home" className="text-white font-bold hover:text-yellow-400">
            {items.home}
          </a>
        </li>
        <li className="list-none">
          <a href="#about" className="text-white font-bold hover:text-yellow-400">
            {items.about}
          </a>
        </li>
        <li className="list-none">
          <a href="#skills" className="text-white font-bold hover:text-yellow-400">
            {items.skills}
          </a>
        </li>
        <li className="list-none">
          <a href="#contact" className="text-white font-bold hover:text-yellow-400">
            {items.contact}
          </a>
        </li>
      </ul>

      {/* Language Selector */}
      <div className="flex items-center gap-4">
        <label htmlFor="language" className="text-white font-bold hover:text-yellow-400">
          {items.language}:
        </label>
        <select
          id="language"
          value={language}
          onChange={handleLanguageChange}
          className="bg-gray-700/80 text-white p-1 rounded-xl"
        >
          <option className="bg-gray-800 font-bold" value="spanish">ES</option>
          <option className="bg-gray-800 font-bold" value="english">EN</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
