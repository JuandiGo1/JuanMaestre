import React from "react";
import Card from "./Card";

interface CardExperienceProps {
  role: string;
  organization: string;
  period: string;
  description: string;
  logoUrl: string;
}

const Card_Experience: React.FC<CardExperienceProps> = ({
  role,
  organization,
  period,
  description,
  logoUrl,
}) => {
  return (
    <Card imageUrl={logoUrl} altText={organization} initialX={50}>
      <div className="flex felx col sm:flex-row justify-between items-center w-full text-left">
        <p className="text-xl font-semibold mr-2">{role}</p>
        <p className="text-sm bg-gray-600/60 p-1 rounded-lg mb-2">{period}</p>
      </div>
      <p className="text-lg text-left">{organization}</p>
      <p className="text-lg mt-2 text-justify sm:text-left mb-4">{description}</p>
    </Card>
  );
};

export default Card_Experience;