import React from 'react'

function AboutPage() {
      const style01 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: "url('gradient.png')",
};
  return (
    <div id='about-us' style={style01} className=' w-screen h-screen flex flex-col md:flex-row gap-5 p-5'>
      <div className='w-full md:w-6/12 h-6/12 md:h-full flex justify-center items-center'>
      <div className='bg-white shadow-lg w-[90%] h-[80%] md:h-[60%] pr-4 rounded-2xl flex justify-center items-end'>
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

export default AboutPage
