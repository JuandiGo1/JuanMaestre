import React from "react";
import Card from "./Card";

interface CardEducationProps {
  degree: string;
  institution: string;
  period: string;
  imageUrl: string;
}

const Card_Education: React.FC<CardEducationProps> = ({
  degree,
  institution,
  period,
  imageUrl,
}) => {
  return (
    <Card imageUrl={imageUrl} altText={institution} initialX={-50}>
      <p className="text-2xl font-semibold">{degree}</p>
      <p className="text-lg">{institution}</p>
      <p className="text-sm">{period}</p>
    </Card>
  );
};

export default Card_Education;
