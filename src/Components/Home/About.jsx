import React from 'react'


function About() {
        const style01 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: "url('gradient.png')",
};

   return (
    <div style={style01} className=' w-screen h-screen flex flex-col md:flex-row gap-0 p-1'>
      <div className='w-full md:w-6/12 h-6/17 md:h-full flex justify-center items-center '>
      <div className='bg-white/30 shadow-md w-[90%] h-[65%] md:h-[50%] pr-4 rounded-2xl flex justify-center items-end backdrop-blur-2xl md:backdrop-blur-[2px]'>
        <img src="AboutImg.svg" alt="img" />
      </div>
      </div>
      <div className='w-full h-6/12 md:h-full flex justify-center items-center'>
      <div className='bg-white w-[90%] h-full rounded-lg p-5 shadow-lg'>
        <h1 className='font-semibold text-lg border-b-1 text-center'>About Us</h1>
        <p className='pt-5 '>Welcome to our Programming Community — a space for coders and beginners to learn, grow, and thrive! We aim to make programming easy, accessible, and fun for everyone starting their coding journey.</p>
        <ul className='bg-red-50 ml-2 mt-5'>
            <li>* Easy-to-follow notes</li>
            <li>* Beginner-friendly learning materials</li>
            <li>* Supportive peer community</li>
            <li>* Practical resources to boost your skills</li>
        </ul>
        <div className='bg-sky-300 w-[100%] h-[400px] mt-10 rounded-md md:block hidden'>otehr</div>
      </div>
      </div>
    </div>
  )
}

export default About
