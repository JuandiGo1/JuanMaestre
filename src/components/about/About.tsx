import React, { useState } from 'react';
import info from '../../info.json';
import Tecnologie from './tecnologie';

const About: React.FC = () => {
  const [language, setLanguage] = useState<'english' | 'spanish'>('english');

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'english' | 'spanish');
  };

  const profile = info.profile[language];
  const skills = info.skills;

  return (
    <div className="text-white font-medium p-8 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">About me</h1>
      <p className="mb-4">{profile.description}</p>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Technologies I use</h2>
        <div className="grid grid-cols-5 gap-4">
          {skills.programming_languages.map((tech, index) => (
            <Tecnologie key={index} name={tech} />
          ))}
          {skills.frameworks_and_tools.map((tool, index) => (
            <Tecnologie key={index} name={tool} />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="language" className="mr-2">Language:</label>
        <select id="language" value={language} onChange={handleLanguageChange} className="bg-gray-700 text-white p-1 rounded">
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
        </select>
      </div>
    </div>
  );
};

export default About;