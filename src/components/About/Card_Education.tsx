import React from "react";

interface CardEducationProps {
  degree: string;
  institution: string;
  period: string;
  imageUrl: string;
}

const Card_Education: React.FC<CardEducationProps> = ({ degree, institution, period, imageUrl }) => {
  return (
    <div className="flex items-center bg-gray-800 text-white rounded-lg p-4 mb-4">
      <img src={imageUrl} alt={institution} className="w-16 h-16 rounded-full mr-4" />
      <div>
        <p className="text-lg font-semibold">{degree}</p>
        <p className="text-sm">{institution}</p>
        <p className="text-sm">{period}</p>
      </div>
    </div>
  );
};

export default Card_Education;