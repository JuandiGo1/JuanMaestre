import { useState } from "react";
import "./App.css";
import Lanyard from "./components/Lanyard/Lanyard";
import Navbar from "./components/navbar/navbar";
import Particles from "./components/Particles/Particles";
import About from "./components/about/About";
import Details from "./components/About/Details";
import Technologies from "./components/Skills/Tecnologies";

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

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#000000] to-[#1b1b1b] overflow-hidden">
      {fondo}
      <div className="relative z-10">
        <div className="min-h-screen grid grid-cols-2">
          <div className="flex flex-col items-center">
            <Navbar language={language} setLanguage={setLanguage} />
            <div className="flex items-center justify-center mt-10">
              <About language={language} />
            </div>
          </div>
          <div className="flex items-start justify-center h-full">
            <Lanyard position={[0, 0, 11]} gravity={[0, -40, 0]} fov={20} />
          </div>
        </div>
        <section className="min-h-screen">
          <Details language={language} />
        </section>
        <section className="min-h-screen">
          <Technologies language={language} />
        </section>
      </div>
    </div>
  );
}

export default App;
