import React from 'react';

const Tecnologie = ({ name, logoUrl }) => {
  return (
    <div className="w-24 h-24 bg-gray-700/50 rounded-2xl flex flex-col items-center justify-center p-2">
      <img src={logoUrl} alt={name} className="w-12 h-12 mb-2" />
      <span className="text-white text-sm">{name}</span>
    </div>
  );
};

export default Tecnologie;

