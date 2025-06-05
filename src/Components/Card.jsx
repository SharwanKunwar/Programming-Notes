import { motion } from 'motion/react';



function Card({isAvailable, imgLink, title, des, id, view }) {


  const handleClick = (e) => {
    if (e.target.id === 'c') {
      alert("Thanks to CodeWithHarry for providing helpful notes and resources that made learning easier! 🙏");
      window.open(view, '_blank');
    }else if(e.target.id === 'ReactInterview'){
      alert("Thanks to Khushi_Kumari for providing helpful notes and resources that made learning easier! 🙏");
      window.open(view, '_blank');
    }
     else {
      alert("Not added yet. Check later.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className='bg-gray-50/30 w-[400px] md:w-[300px] h-[400px] rounded-2xl flex justify-center items-center flex-col shadow-lg border-1 border-white backdrop-blur-2xl'
    >
      <div className='w-full h-6/17 flex justify-center items-center'>
      {isAvailable &&(
        <div className='bg-green-600 absolute mt-29 ml-24 w-[20px] h-[20px] rounded-full shadow-sm'></div>
      )}
        <img className='bg-gray-50 w-[150px] rounded-full h-[150px] p-5 shadow-md' src={imgLink} alt="img" />
      </div>
      <div className='w-full h-6/12'>
        <h1 className='text-center text-2xl font-bold pt-5'>{title}</h1>
        <p className='pt-2 pb-3 md:pl-4 md:pr-1 pr-5 pl-5 text-gray-400'>{des}</p>
        <section className='w-full flex justify-center mt-3'>
          <button
            onClick={handleClick}
            id={id}
            className='bg-sky-400 text-white font-medium w-[80%] h-[45px] rounded-lg shadow-sm hover:shadow-md hover:bg-sky-300 hover:font-bold active:shadow-md active:bg-sky-300 active:font-bold focus:ring-1 focus:ring-sky-400'>
            Download Now
          </button>
        </section>
      </div>
    </motion.div>
  );
}

export default Card;
