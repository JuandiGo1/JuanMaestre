import React, { useState } from "react";
import emailjs from "@emailjs/browser";
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
  const [isSubmitted, setIsSubmitted] = useState(false); // Estado para controlar el envío

  const phone = info.contact.phone.split(" ").join("");
  const whatsapp = `https://wa.me/${phone}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      firstName,
      lastName,
      email,
      message,
      to_email: info.contact.email, // Reemplaza con tu dirección de correo electrónico
    };

    emailjs
      .send(
        "service_s6ydocn", // Reemplaza con tu Service ID de EmailJS
        "template_ox9atvj", // Reemplaza con tu Template ID de EmailJS
        templateParams,
        "I6AGDa2z8kT341kWL" // Reemplaza con tu Public Key de EmailJS
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          // Limpiar el formulario después de enviarlo
          setFirstName("");
          setLastName("");
          setEmail("");
          setMessage("");
          setIsSubmitted(true); // Actualizar el estado de envío
          setTimeout(() => setIsSubmitted(false), 3000); // Restablecer el estado después de 3 segundos
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
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
    <div id="contact" className="flex flex-col mx-4 items-center">
      <div className="mt-20 mb-10">
        <DecryptedText
          text={`< ${currentTexts.contactMe} />`}
          speed={60}
          maxIterations={20}
          sequential={true}
          className="text-white text-4xl font-bold md:text-6xl "
          encryptedClassName="text-4xl font-bold text-blue-500 md:text-6xl "
          animateOn="view"
          revealDirection="start"
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto justify-center bg-[#121212]/90 p-8 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col justify-around items-center text-white gap-2">
          <h2 className="text-2xl font-bold text-white mb-6 md:text-3xl">
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
            <a
              href={info.contact.github}
              target="_blank"
              rel="noreferrer"
              className="mr-4"
            >
              <i className="fa-brands fa-square-github text-gray-50 text-4xl"></i>
            </a>
            <a
              href={info.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mr-4"
            >
              <i className="fa-brands fa-linkedin text-gray-50 text-4xl"></i>
            </a>
            <a href={whatsapp} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-square-whatsapp text-gray-50 text-4xl"></i>
            </a>
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="col-span-2 text-left md:col-span-1">
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
            <div className="col-span-2 text-left md:col-span-1">
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
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline w-full flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer"
              >
                <span
                  className={`transition-opacity duration-300 ${
                    isSubmitted ? "hidden opacity-0" : "opacity-100"
                  }`}
                >
                  {currentTexts.send}
                </span>
                <span
                  className={`transition-opacity duration-300 flex items-start justify-center ${
                    isSubmitted ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <i className="fa-solid fa-circle-check text-white text-lg"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
