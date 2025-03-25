import React from "react";
import info from "../../info.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Footer: React.FC = () => {
  const phone = info.contact.phone.split(" ").join("");
  const whatsapp = `https://wa.me/${phone}`;

  const copyToClipboard = (event: React.MouseEvent, text: string) => {
    event.preventDefault();
    navigator.clipboard.writeText(text).then(
      () => {
        toast.success("Email copied to clipboard!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: "custom-toast", // Añade una clase personalizada
        });
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <footer className="bg-gray-950 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <img src="/logo.png" alt="Logo" className="w-60" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-lg font-bold mb-2">Navigation</h2>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">Home</a></li>
              <li className="mb-1"><a href="#about" className="hover:underline">About</a></li>
              <li className="mb-1"><a href="#skills" className="hover:underline">Skills</a></li>
              <li className="mb-1"><a href="#projects" className="hover:underline">Projects</a></li>
              <li className="mb-1"><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-lg font-bold mb-2">Social</h2>
            <ul>
              <li className="mb-1"><a href={info.contact.github} className="hover:underline">Github</a></li>
              <li className="mb-1"><a href="#" onClick={(e) => copyToClipboard(e, info.contact.email)} className="hover:underline">Email</a></li>
              <li className="mb-1"><a href={info.contact.linkedin} className="hover:underline">Linkedin</a></li>
              <li className="mb-1"><a href={whatsapp} className="hover:underline">Whatsapp</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} Juan David Maestre. All rights reserved.</p>
        </div>
      </div>
      <ToastContainer />
    </footer>
  );
};

export default Footer;