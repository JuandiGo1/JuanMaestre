import React from "react";
import Card from "./Card";

interface CardCertificationProps {
  name: string;
  issuer: string;
  date: string;
  credentialURL: string;
  imageUrl: string;
  language: string;
}

const Card_Certification: React.FC<CardCertificationProps> = ({
  name,
  issuer,
  date,
  credentialURL,
  imageUrl,
  language
}) => {
  return (
    <Card imageUrl={imageUrl} altText={issuer} initialX={-50}>
      <p className="text-2xl font-semibold text-left">{name}</p>
      <p className="text-lg">{issuer}</p>
      <p className="text-sm">{date}</p>
      <div className=" bg-white  rounded-full border-2 text-gray-700 p-2  text-sm font-semibold shadow-2xl hover:text-blue-500 mt-2">
        <a
          href={credentialURL}
          className="mx-2 items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          {language === "english" ? "View Certification" : "Ver Certificado"}
          <i className="fa-solid fa-arrow-up-right-from-square text-sm mx-2"></i>
        </a>
      </div>
      <a href={credentialURL}></a>
    </Card>
  );
};

export default Card_Certification;
