
import React from 'react'

function Card({title,des}) {
  return (
    <div className='bg-gray-50 w-[400px] md:w-[300px] h-[400px] rounded-2xl flex justify-center items-center flex-col shadow-lg'>
      <div className=' w-full h-6/17 flex justify-center items-center'>
      <img className='bg-gray-50 w-[150px] rounded-full h-[150px] p-5' src="react.svg" alt="img" />
      </div>
      <div className=' w-full h-6/12'>
      <h1 className='text-center text-2xl font-bold'>{title}</h1>
      <p className='pt-5 pb-5 pr-2 pl-5 text-black'>{des}</p>
      <section className='w-full flex justify-center mt-3'>
        <button className='bg-sky-400 text-white font-medium w-[80%] h-[45px] rounded-lg'>Download Now</button>
      </section>
      </div>
    </div>
  )
}

export default Card
