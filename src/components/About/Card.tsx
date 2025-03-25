import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

interface CardProps {
  imageUrl: string;
  altText: string;
  children: React.ReactNode;
  initialX: number;
}

const Card: React.FC<CardProps> = ({ imageUrl, altText, children, initialX }) => {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          className="flex flex-col gap-1 sm:flex-row items-start bg-[#121212]/95 text-white rounded-lg mb-6 border p-4 hover:bg-blue-950 transition-transform transform hover:-translate-y-1 ease-in-out"
          initial={{ opacity: 0, x: initialX }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: initialX }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.1 } }}
        >
          <img loading="lazy" src={imageUrl} alt={altText} className="w-16 h-16 object-cover rounded-full mr-4" />
          <div className="flex flex-col justify-center items-start gap-2">
            {children}
          </div>
        </motion.div>
      )}
    </InView>
  );
};

export default Card;