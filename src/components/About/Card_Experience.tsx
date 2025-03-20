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
      <div className="flex justify-between items-center w-full">
        <p className="text-2xl font-semibold">{role}</p>
        <p className="text-sm bg-gray-600/60 p-1 rounded-lg mb-2">{period}</p>
      </div>
      <p className="text-lg">{organization}</p>
      <p className="text-lg mt-2 text-left mb-4">{description}</p>
    </Card>
  );
};

export default Card_Experience;