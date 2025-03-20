import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

interface CardCertificationProps {
  name: string;
  issuer: string;
  date: string;
  credentialURL: string;
  imageUrl: string;
}

const Card_Certification: React.FC<CardCertificationProps> = ({
  name,
  issuer,
  date,
  credentialURL,
  imageUrl,
}) => {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          className="flex items-start max-w-dvh bg-[#121212]/95 text-white rounded-lg mb-6 border hover:bg-blue-950 transition  ease-in-out"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.1 } }}
        >
          <img
            loading="lazy"
            src={imageUrl}
            alt={issuer}
            className="w-16 h-16 object-center  rounded-full m-4"
          />
          <div className="flex flex-col justify-center items-start p-4 gap-3">
            <p className="text-2xl font-semibold">{name}</p>
            <p className="text-lg">{issuer}</p>
            <p className="text-sm">{date}</p>
            <div className=" bg-white  rounded-full border-2 text-gray-700 p-2  text-sm font-semibold shadow-2xl hover:text-blue-500">
              <a
                href={credentialURL}
                className="mx-2 items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certification
                <i className="fa-solid fa-arrow-up-right-from-square text-sm mx-2"></i>
              </a>
            </div>
            <a href={credentialURL}></a>
          </div>
        </motion.div>
      )}
    </InView>
  );
};

export default Card_Certification;
