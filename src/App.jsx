import { useState, useEffect, lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";
import Particles from "./components/Particles/Particles";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/About";

const Lanyard = lazy(() => import("./components/Lanyard/Lanyard"));
const Details = lazy(() => import("./components/About/Details"));
const Technologies = lazy(() => import("./components/Skills/Tecnologies"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  const [language, setLanguage] = useState("english");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 960);

  // Detectar cambios en el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 960);
    };

    window.addEventListener("resize", handleResize);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Intersection Observers para cada sección
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
  const { ref: detailsRef, inView: detailsInView } = useInView({ triggerOnce: true });
  const { ref: technologiesRef, inView: technologiesInView } = useInView({ triggerOnce: true });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true });
  const { ref: footerRef, inView: footerInView } = useInView({ triggerOnce: true });

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#000000] to-[#1b1b1b] overflow-hidden">
      {/* Fondo fijo que cubre toda la página */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Particles
          particleColors={["#FBFBFB", "#0967e1"]}
          particleCount={100}
          particleSpread={5}
          speed={0.1}
          particleBaseSize={80}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10">
        {isTablet && (
          <div className="absolute top-0 left-0 w-full z-20">
            <Navbar language={language} setLanguage={setLanguage} isMobile={isTablet} />
          </div>
        )}

        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
          {/* Div principal */}
          <div className={`flex flex-col items-center order-2 md:order-1`}>
            {!isMobile && !isTablet && (
              <Navbar language={language} setLanguage={setLanguage} isMobile={isMobile} />
            )}
            <div ref={aboutRef}>
              {aboutInView && (
                <div className="flex items-center justify-center mt-1 sm:mt-10">

                  <About language={language} />
                </div>
              )}
            </div>
          </div>

          {/* Div del Lanyard */}
          <div className={`flex flex-col items-start justify-start h-full relative order-1 md:order-2`}>
            {isMobile && (
              <div className="absolute top-0 left-0 w-full z-20">
                <Navbar language={language} setLanguage={setLanguage} isMobile={isMobile} />
              </div>
            )}
            <Suspense fallback={<div className="text-white text-center mt-10">Loading Lanyard...</div>}>
              <Lanyard
                position={isMobile ? [0, 0, 14] : isTablet ? [0, 0, 16] : [0, 0, 11]}
                gravity={[0, -40, 0]}
                fov={isTablet ? 23 : 20}
              />
            </Suspense>
          </div>
        </div>

        <div ref={detailsRef}>
          {detailsInView && (
            <Suspense fallback={<div className="text-white text-center mt-10">Loading Details...</div>}>
              <section className="min-h-(90vh)">
                <Details language={language} />
              </section>
            </Suspense>
          )}
        </div>

        <div ref={technologiesRef}>
          {technologiesInView && (
            <Suspense fallback={<div className="text-white text-center mt-10">Loading Technologies...</div>}>
              <section className="min-h-(80vh)">
                <Technologies language={language} />
              </section>
            </Suspense>
          )}
        </div>

        <div ref={projectsRef}>
          {projectsInView && (
            <Suspense fallback={<div className="text-white text-center mt-10">Loading Projects...</div>}>
              <section className="min-h-screen">
                <Projects language={language}></Projects>
              </section>
            </Suspense>
          )}
        </div>

        <div ref={contactRef}>
          {contactInView && (
            <Suspense fallback={<div className="text-white text-center mt-10">Loading Contact...</div>}>
              <section className="min-h-(90vh) mb-30">
                <Contact language={language}></Contact>
              </section>
            </Suspense>
          )}
        </div>

        <div ref={footerRef}>
          {footerInView && (
            <Suspense fallback={<div className="text-white text-center mt-10">Loading Footer...</div>}>
              <Footer></Footer>
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
