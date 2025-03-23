import React, { useState } from "react";
import info from "../../info.json";
import Card_Education from "./Card_Education";
import Card_Experience from "./Card_Experience";
import DecryptedText from "../DecryptedText/DecryptedText";
import LanguageCard from "./Lenguage";
import Card_Certification from "./Card_Certification";

const Details: React.FC<{ language: "english" | "spanish" }> = ({
  language,
}) => {
  const [showAllCertifications, setShowAllCertifications] = useState(false); // Estado para controlar cuántos certificados se muestran
  const education = info.education[language];
  const languages = info.languages;
  const experience = info.experience.map((exp) => exp[language]);

  // Mostrar solo los primeros 2 certificados si no se ha hecho clic en "Ver más"
  const certificationsToShow = showAllCertifications
    ? info.certifications
    : info.certifications.slice(0, 2);

  return (
    <div id="about" className="p-6">
      <DecryptedText
        text={
          language === "english" ? "< More about Me />" : "< Más sobre mí />"
        }
        speed={60}
        maxIterations={20}
        sequential={true}
        className="text-white text-4xl font-bold sm:text-5xl "
        encryptedClassName="text-4xl font-bold text-blue-500 sm:text-5xl "
        animateOn="view"
        revealDirection="start"
      />

      <div className="text-white font-medium p-8 grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
        <div>
          {/*Educacion*/}
          <h2 className="text-3xl text-left font-medium mb-4">
            <i className="fa-solid fa-user-graduate text-2xl mr-2 "></i>
            {language === "english" ? "Education" : "Educación"}
          </h2>
          <Card_Education
            degree={education.degree}
            institution={education.institution}
            period={education.period}
            imageUrl={education.logo}
          />

          {/*Certificaciones*/}
          <h2 className="text-3xl text-left font-medium mb-4">
            <i className="fa-solid fa-award text-2xl mr-2 "></i>
            {language === "english" ? "Certifications" : "Certificados"}
          </h2>
          {certificationsToShow.map((cert, index) => (
            <Card_Certification
              key={index}
              name={cert[language].name}
              issuer={cert[language].issuer}
              date={cert[language].date}
              credentialURL={cert[language].credential_url}
              imageUrl={cert[language].logo}
              language={language}
            />
          ))}
          {/* Botón para mostrar más o menos */}
          {info.certifications.length > 2 && (
            <button
              onClick={() => setShowAllCertifications(!showAllCertifications)}
              className="text-blue-500 text-lg hover:underline mt-4"
            >
              {showAllCertifications
                ? language === "english"
                  ? "Show Less"
                  : "Ver Menos"
                : language === "english"
                ? "Show More"
                : "Ver Más"}
            </button>
          )}
        </div>

        {/*Exp*/}
        <div>
          <h2 className="text-3xl text-left font-medium mb-4">
            <i className="fa-solid fa-group-arrows-rotate text-2xl mr-2 "></i>
            {language === "english" ? "Experience" : "Experiencia"}
          </h2>
          {experience.map((exp, index) => (
            <Card_Experience
              key={index}
              role={exp.role}
              organization={exp.organization}
              period={exp.period}
              description={exp.description}
              logoUrl={exp.logo}
            />
          ))}
          {/*Idiomas*/}
          <h2 className="text-3xl text-left font-medium mt-10 mb-10">
            <i className="fa-solid fa-earth-americas text-2xl mr-2 "></i>
            {language === "english" ? "Languages" : "Idiomas"}
          </h2>
          <div className="flex justify-center items-center gap-10 text-2xl text-left">
            <LanguageCard
              flagUrl="/assets/colombia.png"
              language={language === "english" ? "Spanish" : "Español"}
              level={languages.spanish}
            />

            <LanguageCard
              flagUrl="/assets/eng.png"
              language={language === "english" ? "English" : "Inglés"}
              level={languages.english}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
