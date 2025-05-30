import SecondSection from "./Home/secondSection";


function Home() {

  const style01 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: "url('gradient.png')",
  
};


  return (
    <>
      <div style={{ backgroundImage: "url('/iconsImg.png')" }} className=' w-screen h-screen md:flex justify-center items-center gap-10 bg-cover bg-center relative'>
        <div style={style01} className=" flex justify-center items-center md:w-full md:h-full w-full h-6/12">
          <section className=" w-full md:h-full flex flex-col md:justify-end justify-center pl-5 pr-5 ">
          <div className="text-center z-10 md:bg-white h-[250px] md:pt-7">
            <h1 className="text-4xl font-bold mb-2 ">Download Programming Notes Easily</h1>
            <h3 className="text-2xl mb-5">Programming, Frameworks, Libraries, Databases, AWS etc.</h3>
            <p className="text-gray-700">
            Get concise, well-organized notes on various programming topics to speed up your learning.
            </p>
            <button className="bg-blue-600 text-white md:px-10 px-4 mt-7 py-2 rounded hover:bg-blue-700">
              Explore Notes
            </button>
          </div>
          </section>
        </div>
        <div style={style01} className="md:absolute mb-60 md:w-6/11 md:h-full w-full h-6/12">
              <spline-viewer className="md:block hidden" url="https://prod.spline.design/MBaQZNt-ZoX1US9C/scene.splinecode"></spline-viewer>
              <div className="md:hidden block mt-20 p-7">
                <img src="/SVG/svg04.svg" alt="svg" />
              </div>
        </div>
        
      </div>
      <SecondSection/>
    </>
  );
}

export default Home;




