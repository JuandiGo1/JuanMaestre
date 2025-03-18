import React, { useState } from "react";
import info from "../../info.json";
import { motion } from "framer-motion";
import DecryptedText from "../DecryptedText/DecryptedText";

const Contact: React.FC<{ language: "english" | "spanish" }> = ({
  language,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a un servidor
    console.log("Nombre:", firstName);
    console.log("Apellido:", lastName);
    console.log("Email:", email);
    console.log("Mensaje:", message);
    // Limpiar el formulario después de enviarlo
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  const texts = {
    english: {
      contactMe: "Contact Me",
      info_contact:
        "Thank you for checking out my portfolio! If you're looking for a Systems Engineer or developer, or if something caught your interest, feel free to contact me!",
      name: "First name",
      lastName: "Last name",
      email: "Email",
      message: "Message",
      send: "Send message",
    },
    spanish: {
      contactMe: "Contáctame",
      info_contact:
        "Gracias por echarle un vistazo a mi portafolio. Si estás buscando un Ingeniero de Sistemas o desarrollador, o simplemente viste algo que te pareció interesante, ¡no dudes en contactarme!",
      name: "Nombre",
      lastName: "Apellido",
      email: "Correo Electrónico",
      message: "Mensaje",
      send: "Enviar mensaje",
    },
  };

  const currentTexts = texts[language];

  return (
    <div id="contact">
        <div className="mt-20 mb-20">
        <DecryptedText
          text={`< ${currentTexts.contactMe} />`}
          speed={60}
          maxIterations={20}
          sequential={true}
          className="text-white text-5xl font-bold "
          encryptedClassName="text-5xl font-bold text-blue-500 "
          animateOn="view"
          revealDirection="start"
        />
      </div>
      <div
        className="max-w-4xl mx-auto bg-[#121212]/90 p-8 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="flex flex-col justify-around items-center text-white">
          <h2 className="text-3xl font-bold text-white mb-6">
            {currentTexts.contactMe}
          </h2>
          <p className="text-white mb-4">{currentTexts.info_contact}</p>
          <div className="mb-4">
            <p className="mb-2">
              <i className="fa-solid fa-location-dot mr-2"></i> Barranquilla,
              Colombia{" "}
            </p>
            
            <p className="mb-4">
              <i className="fa-solid fa-envelope mr-2"></i> {info.contact.email}{" "}
            </p>
            <motion.a
              href={info.contact.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <i className="fa-brands fa-square-github text-gray-50 text-4xl mr-4"></i>
            </motion.a>
            <motion.a
              href={info.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <i className="fa-brands fa-linkedin text-gray-50 text-4xl"></i>
            </motion.a>
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="col-span-1 text-left">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                {currentTexts.name}
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-3 py-2 text-gray-200 border rounded-lg focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="col-span-1 text-left">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                {currentTexts.lastName}
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-3 py-2 text-gray-200 border rounded-lg focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="col-span-2 text-left">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                {currentTexts.email}
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-gray-200 border rounded-lg focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="col-span-2 text-left">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="message"
              >
                {currentTexts.message}
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 text-gray-200 border rounded-lg focus:outline-none focus:shadow-outline"
                rows={5}
                required
              ></textarea>
            </div>
            <div className="col-span-2 flex w-full">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline w-full"
              >
                {currentTexts.send}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
