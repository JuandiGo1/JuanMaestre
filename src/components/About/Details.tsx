import React from "react";
import info from "../../info.json";
import Card_Education from "./Card_Education";

const Details: React.FC<{ language: "english" | "spanish" }> = ({ language }) => {
  const education = info.education;
  const languages = info.languages;
  const experience = info.experience.map((exp) => exp[language]);

  return (
    <div className="text-white font-medium p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4"><i className="fa-solid fa-user-graduate text-2xl mr-2"></i>{language === "english" ? "Education" : "Educación"}</h2>
        <Card_Education
          degree={education.degree}
          institution={education.institution}
          period={education.period}
          imageUrl="" // Reemplaza con la URL de la imagen de la institución
        />
        
        <h2 className="text-2xl font-semibold mb-4">{language === "english" ? "Languages" : "Idiomas"}</h2>
        <p className="mb-2"><strong>{language === "english" ? "Spanish" : "Español"}:</strong> {languages.spanish}</p>
        <p className="mb-2"><strong>{language === "english" ? "English" : "Inglés"}:</strong> {languages.english}</p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">{language === "english" ? "Experience" : "Experiencia"}</h2>
        {experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <p className="mb-2"><strong>{exp.role}</strong></p>
            <p className="mb-2">{exp.organization}</p>
            <p className="mb-2">{exp.period}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;