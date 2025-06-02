import HomeSecondSection from "./Home/HomeSecondSection";
import About from "./Home/About";
import {motion} from 'motion/react';
import SocialLinks from "./SocialLinks";


function Home() {

  const style01 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: "url('gradient.png')",
  
};




  return (
    <>
      <div style={{ backgroundImage: "url('iconsImg.png')" }} className=' w-screen md:h-screen h-6/6 md:flex justify-center items-center gap-10 bg-cover bg-center relative md:pt-10'>
        
        <div style={style01} className=" flex justify-center items-center md:w-full md:h-full w-full h-6/12 md:mt-20">
        
          <section className=" w-full md:h-full flex flex-col md:justify-end justify-center pl-5 pr-5 ">
          <div className="text-center z-10 md:bg-white h-[250px] md:pt-7">
            <motion.h1
            initial={{ y: -50, opacity: 0, filter: 'blur(5px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{
              duration: 0.5,
              delay:0.1,
              ease: 'easeOut',
            }}
            className="text-4xl font-bold md:mb-2 mb-3 ">Download Programming Notes Easily</motion.h1>
            <motion.h3
            initial={{ y: -50, opacity: 0, filter: 'blur(5px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{
              duration: 0.5,
              delay:0.2,
              ease: 'easeOut',
            }}
            className="text-2xl md:mb-5 mb-5">Programming, Frameworks, Libraries, Databases, AWS etc.</motion.h3>
            <motion.p
            initial={{ y: -50, opacity: 0, filter: 'blur(5px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{
              duration: 0.5,
              delay:0.3,
              ease: 'easeOut',
            }}
            className="text-gray-700">
            Get concise, well-organized notes on various programming topics to speed up your learning.
            </motion.p>
            <motion.button 
            initial={{ y: -50, opacity: 0, filter: 'blur(5px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{
              duration: 0.5,
              delay:0.4,
              ease: 'easeOut',
            }}
            className="bg-blue-600 text-white md:px-10 px-10 md:mt-7 mt-10  py-2 rounded hover:bg-blue-700">
              Explore Notes
            </motion.button>
          </div>
          </section>
        </div>
        <div style={style01} className="md:absolute md:mb-50 md:w-6/11 md:h-full">
              <spline-viewer className="md:block hidden" url="https://prod.spline.design/MBaQZNt-ZoX1US9C/scene.splinecode"></spline-viewer>
              <div className="md:hidden md:mt-10 mt-10 p-3 pt-7 flex justify-center items-center">
                <img src="/svg04.svg" alt="svg" />
              </div>
        </div>
        
      <SocialLinks/>
      </div>
      <HomeSecondSection/>
      <About/>
    </>
  );
}

export default Home;




