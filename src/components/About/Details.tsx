import React from "react";
import info from "../../info.json";
import Card_Education from "./Card_Education";
import Card_Experience from "./Card_Experience";
import DecryptedText from "../DecryptedText/DecryptedText";
import LanguageCard from "./Lenguage";

const Details: React.FC<{ language: "english" | "spanish" }> = ({
  language,
}) => {
  const education = info.education[language];
  const languages = info.languages;
  const experience = info.experience.map((exp) => exp[language]);

  return (
    <div id="about">
      <DecryptedText
        text={
          language === "english" ? "< More about Me />" : "< Más sobre mí />"
        }
        speed={60}
        maxIterations={20}
        sequential={true}
        className="text-white text-5xl font-bold"
        encryptedClassName="text-5xl font-bold text-blue-500"
        animateOn="view"
        revealDirection="start"
      />

      <div className="text-white font-medium p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-4xl text-left font-semibold mb-4">
            <i className="fa-solid fa-user-graduate text-3xl mr-2"></i>
            {language === "english" ? "Education" : "Educación"}
          </h2>
          <Card_Education
            degree={education.degree}
            institution={education.institution}
            period={education.period}
            imageUrl={education.logo}
          />

          <h2 className="text-4xl text-left font-semibold mt-10 mb-4">
            <i className="fa-solid fa-earth-americas text-3xl mr-2"></i>
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
        <div>
          <h2 className="text-4xl text-left font-semibold mb-4">
            <i className="fa-solid fa-group-arrows-rotate text-3xl mr-2"></i>
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
