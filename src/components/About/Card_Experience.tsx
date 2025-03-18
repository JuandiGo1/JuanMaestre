import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

interface CardExperienceProps {
  role: string;
  organization: string;
  period: string;
  description: string;
  logoUrl: string;
}

const Card_Experience: React.FC<CardExperienceProps> = ({ role, organization, period, description, logoUrl }) => {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          className="flex items-start bg-[#121212]/95 text-white rounded-lg mb-6 border p-4 hover:bg-blue-950 transition-transform transform hover:-translate-y-1 ease-in-out "
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.1 } }}
        >
          <img loading="lazy" src={logoUrl} alt={organization} className="w-16 h-16 object-cover rounded-full mr-4" />
          <div className="flex flex-col justify-center items-start gap-2">
            <div className="flex justify-between items-center w-full">
                <p className="text-2xl font-semibold">{role}</p>
                <p className="text-sm bg-gray-600/60 p-1 rounded-lg mb-2">{period}</p>
            </div>
            <p className="text-lg">{organization}</p>
            <p className="text-lg mt-2 text-left mb-4">{description}</p>
          </div>
        </motion.div>
      )}
    </InView>
  );
};

export default Card_Experience;