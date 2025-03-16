import React from "react";

interface LanguageCardProps {
  flagUrl: string;
  language: string;
  level: string;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ flagUrl, language, level }) => {
  return (
    <div className="flex flex-col items-center  bg-[#121212]/95 text-white rounded-xl p-4 mb-4 border border-gray-700 shadow-lg hover:bg-blue-950 transition  ease-in-out">
      <img src={flagUrl} alt={language} className="w-16 h-16 object-cover rounded-full mb-4" />
      <p className="text-lg font-semibold">{language}</p>
      <p className="text-sm">{level}</p>
    </div>
  );
};

export default LanguageCard;