import { useState, useEffect } from "react";
import "./App.css";
import Lanyard from "./components/Lanyard/Lanyard";
import Navbar from "./components/navbar/navbar";
import Particles from "./components/Particles/Particles";
import About from "./components/About/About";
import Details from "./components/About/Details";
import Technologies from "./components/Skills/Tecnologies";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const fondo = (
  <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full z-0">
    <Particles
      particleColors={["#ffffff", "#0967e1"]}
      particleCount={800}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={210}
      moveParticlesOnHover={false}
      alphaParticles={false}
      disableRotation={false}
    />
  </div>
);

function App() {
  const [language, setLanguage] = useState("english");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detectar cambios en el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#000000] to-[#1b1b1b] overflow-hidden">
      {fondo}
      <div className="relative z-10">
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
          {/* Div principal */}
          <div className={`flex flex-col items-center ${isMobile ? "order-2" : "order-1"}`}>
            {!isMobile && <Navbar language={language} setLanguage={setLanguage} isMobile={isMobile} />}
            <div className="flex items-center justify-center mt-10">
              <About language={language} />
            </div>
          </div>

          {/* Div del Lanyard */}
          <div className={`flex flex-col items-start justify-center h-full relative ${isMobile ? "order-1" : "order-2"}`}>
            {isMobile && (
              <div className="absolute top-0 left-0 w-full z-20">
                <Navbar language={language} setLanguage={setLanguage} isMobile={isMobile} />
              </div>
            )}
            <Lanyard position={isMobile ? [0, 0, 14] : [0, 0, 11]} gravity={[0, -40, 0]} fov={20} />
          </div>
        </div>

        <section className="min-h-(90vh)">
          <Details language={language} />
        </section>
        <section className="min-h-(80vh)">
          <Technologies language={language} />
        </section>
        <section className="min-h-screen">
          <Projects language={language}></Projects>
        </section>
        <section className="min-h-(90vh) mb-30">
          <Contact language={language}></Contact>
        </section>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
