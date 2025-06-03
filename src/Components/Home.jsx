import { useState, useEffect } from 'react';
import HomeSecondSection from "./Home/HomeSecondSection";
import About from "./Home/About";
import { motion } from 'framer-motion';
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom"; // fixed: use react-router-dom

function Home() {
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const spline = document.querySelector('spline-viewer');
      if (spline && spline.shadowRoot?.querySelector('canvas')) {
        setSplineLoaded(true);
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const style01 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url('gradient.png')",
  };

  return (
    <>
      <div style={{ backgroundImage: "url('iconsImg.png')" }} className='w-screen md:h-screen h-6/6 md:flex justify-center items-center gap-10 bg-cover bg-center relative md:pt-10'>

        {/* Left Side Text Section */}
        <div style={style01} className="flex justify-center items-center md:w-full md:h-full w-full h-6/12 md:mt-20">
          <section className="w-full md:h-full flex flex-col md:justify-end justify-center pl-5 pr-5">
            <div className="text-center z-10 md:bg-white h-[250px] md:pt-7">
              <motion.h1
                initial={{ y: -50, opacity: 0, filter: 'blur(5px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                className="text-4xl font-bold md:mb-2 mb-3"
              >
                Download Programming Notes Easily
              </motion.h1>
              <motion.h3
                initial={{ y: -50, opacity: 0, filter: 'blur(5px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                className="text-2xl md:mb-5 mb-5"
              >
                Programming, Frameworks, Libraries, Databases, AWS etc.
              </motion.h3>
              <motion.p
                initial={{ y: -50, opacity: 0, filter: 'blur(5px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                className="text-gray-700"
              >
                Get concise, well-organized notes on various programming topics to speed up your learning.
              </motion.p>
              <Link to="/Notes">
                <motion.button
                  initial={{ y: -50, opacity: 0, filter: 'blur(5px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
                  className="bg-blue-600 text-white md:px-10 px-10 md:mt-7 mt-10 py-2 rounded hover:bg-blue-700"
                >
                  Explore Notes
                </motion.button>
              </Link>
            </div>
          </section>
        </div>

        {/* Right Side Spline or Image */}
        <div style={style01} className="md:absolute md:mb-50 md:w-6/11 md:h-full">
          {/* Fallback image before spline loads */}
          {!splineLoaded && (
            <div className="hidden md:flex justify-center items-center h-full absolute">
              <img src="/svg04.svg" alt="Loading 3D" className="w-full h-6/12 object-contain" />
            </div>
          )}
          {/* Spline Viewer */}
          <spline-viewer
            className={`md:block hidden transition-opacity duration-700 ${splineLoaded ? 'opacity-100' : 'opacity-0'}`}
            url="https://prod.spline.design/MBaQZNt-ZoX1US9C/scene.splinecode"
          ></spline-viewer>

          {/* Mobile image view */}
          <div className="md:hidden mt-10 p-3 pt-0 flex justify-center items-center">
            <img src="/svg04.svg" alt="svg" />
          </div>
        </div>

        <SocialLinks />
      </div>

      <HomeSecondSection />
      <About />
    </>
  );
}

export default Home;
