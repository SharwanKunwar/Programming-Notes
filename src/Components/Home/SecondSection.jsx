import React from 'react'

function SecondSection() {
      const style01 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: "url('gradient.png')",
};
  return (
    <div style={style01}  className='flex justify-center items-center'>
      <div className='  w-[90%] md:h-[500px] h-[200px] flex justify-center items-center object-contain rounded-2xl'>
        <img className='w-full md:h-[400px] h-[150px] object-cover rounded-2xl' src="/robot.png" alt="img" />
      </div>
    </div>
  )
}

export default SecondSection
