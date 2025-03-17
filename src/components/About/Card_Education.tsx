import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

interface CardEducationProps {
  degree: string;
  institution: string;
  period: string;
  imageUrl: string;
}

const Card_Education: React.FC<CardEducationProps> = ({
  degree,
  institution,
  period,
  imageUrl,
}) => {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          className="flex items-start max-w-dvh bg-[#121212]/95 text-white rounded-lg mb-4 border hover:bg-blue-950 transition  ease-in-out"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <img
            loading="lazy"
            src={imageUrl}
            alt={institution}
            className="w-32 h-full object-cover rounded-l-lg"
          />
          <div className="flex flex-col justify-center items-start p-4 gap-3">
            <p className="text-2xl font-semibold">{degree}</p>
            <p className="text-lg">{institution}</p>
            <p className="text-sm">{period}</p>
          </div>
        </motion.div>
      )}
    </InView>
  );
};

export default Card_Education;
