
import React from 'react'

function Card({title,des,id,view}) {

const handleClick = (e) => {
    if (e.target.id === id && view) {
      window.open(view, '_blank');
    }
  };




  return (
    <div className='bg-gray-50/30 w-[400px] md:w-[300px] h-[400px] rounded-2xl flex justify-center items-center flex-col shadow-lg border-1 border-white backdrop-blur-2xl'>
      <div className=' w-full h-6/17 flex justify-center items-center'>
      <img className='bg-gray-50 w-[150px] rounded-full h-[150px] p-5 shadow-md' src="react.svg" alt="img" />
      </div>
      <div className=' w-full h-6/12'>
      <h1 className='text-center text-2xl font-bold pt-5'>{title}</h1>
      <p className='pt-2 pb-3 md:pl-4 md:pr-1 px-4 text-gray-400 '>{des}</p>
      <section className='w-full flex justify-center mt-3'>
        <button onClick={handleClick} id={id} className='bg-sky-400 text-white font-medium w-[80%] h-[45px] rounded-lg'>Download Now</button>
      </section>
      </div>
    </div>
  )
}

export default Card
