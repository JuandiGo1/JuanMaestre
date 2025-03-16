import React from "react";
import info from "../../info.json";
import Card_Education from "./Card_Education";
import DecryptedText from "../DecryptedText/DecryptedText";
import LanguageCard from "./Lenguage";

const Details: React.FC<{ language: "english" | "spanish" }> = ({
  language,
}) => {
  const education = info.education[language];
  const languages = info.languages;
  const experience = info.experience.map((exp) => exp[language]);

  return (
    <div className="name">
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
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDBb15zio8gKuIEDJZXkEHyB9pSmOQ7MxZEQ&s"
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
          <h2 className="text-2xl font-semibold mb-4">
            {language === "english" ? "Experience" : "Experiencia"}
          </h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <p className="mb-2">
                <strong>{exp.role}</strong>
              </p>
              <p className="mb-2">{exp.organization}</p>
              <p className="mb-2">{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
