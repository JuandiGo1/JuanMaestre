import React, { useState } from "react";

function Navbar() {
  const [language, setLanguage] = useState("es");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <nav className="bg-[#0967e1]/50 px-16 w-full flex justify-between items-center h-[60px] text-base font-medium rounded-br-xl">
      {/* Navigation Links */}
      <ul className="flex gap-8">
        <li className="list-none">
          <a href="#home" className="text-white font-bold hover:text-yellow-400 ">
            HOME
          </a>
        </li>
        <li className="list-none">
          <a href="#about" className="text-white font-bold hover:text-yellow-400 ">
            ABOUT
          </a>
        </li>
        <li className="list-none">
          <a href="#skills" className="text-white font-bold hover:text-yellow-400 ">
            SKILLS
          </a>
        </li>
        <li className="list-none">
          <a href="#contact" className="text-white font-bold hover:text-yellow-400 ">
            CONTACT
          </a>
        </li>
      </ul>

      {/* Language Selector */}
      <div className="flex items-center gap-4">
        
        <label htmlFor="language" className="text-white font-bold hover:text-yellow-400 ">
          Language:
        </label>
        <select
          id="language"
          value={language}
          onChange={handleLanguageChange}
          className="bg-gray-700/80 text-white p-1 rounded-xl"
        >
          <option className="bg-gray-800 font-bold" value="es">ES </option>
          <option className="bg-gray-800 font-bold" value="en">EN</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
