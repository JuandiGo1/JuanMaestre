import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

interface LanguageCardProps {
  flagUrl: string;
  language: string;
  level: string;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ flagUrl, language, level }) => {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          className="w-50 h-auto flex flex-col items-center bg-[#121212]/95 text-white rounded-xl p-4 mb-4 border hover:bg-blue-950 transition-transform transform hover:-translate-y-1 ease-in-out"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.2 }}
        >
          <img src={flagUrl} alt={language} className="w-16 h-16 object-cover rounded-full mb-4" />
          <p className="text-lg font-semibold">{language}</p>
          <p className="text-sm">{level}</p>
        </motion.div>
      )}
    </InView>
  );
};

export default LanguageCard;