import React from "react";
import info from "../../info.json";
import Card_Education from "./Card_Education";
import Card_Experience from "./Card_Experience";
import DecryptedText from "../DecryptedText/DecryptedText";
import LanguageCard from "./Lenguage";
import Card_Certification from "./Card_Certification";

const Details: React.FC<{ language: "english" | "spanish" }> = ({
  language,
}) => {
  const education = info.education[language];
  const languages = info.languages;
  const experience = info.experience.map((exp) => exp[language]);

  return (
    <div id="about" className="p-6">
      <DecryptedText
        text={
          language === "english" ? "< More about Me />" : "< Más sobre mí />"
        }
        speed={60}
        maxIterations={20}
        sequential={true}
        className="text-white text-5xl font-bold "
        encryptedClassName="text-5xl font-bold text-blue-500 "
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
            {language === "english" ? "Certifiations" : "Certificados"}
          </h2>
          {info.certifications.map((cert, index) => (
            <Card_Certification
              key={index}
              name={cert[language].name}
              issuer={cert[language].issuer}
              date={cert[language].date}
              credentialURL={cert[language].credential_url}
              imageUrl={cert[language].logo}

            />
          ))}

          {/*Idiomas*/}
          <h2 className="text-3xl text-left font-medium mt-10 mb-10">
            <i className="fa-solid fa-earth-americas text-2xl mr-2 "></i>
            {language === "english" ? "Languages" : "Idiomas"}
          </h2>
          <div className="flex justify-center items-center gap-10 text-2xl text-left">
            <LanguageCard
              flagUrl="src\assets\colombia.png"
              language={language === "english" ? "Spanish" : "Español"}
              level={languages.spanish}
            />

            <LanguageCard
              flagUrl="src\assets\usa.png"
              language={language === "english" ? "English" : "Inglés"}
              level={languages.english}
            />
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Details;
