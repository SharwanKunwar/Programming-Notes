

function Home() {

  const style01 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

  return (
    <>
      <div className='bg-yellow-400 w-screen h-screen md:flex justify-center items-center gap-10'>
        <div style={style01} className="bg-red-400 md:w-6/12 md:h-[90%] w-full h-6/12 ">left</div>
        <div style={style01} className="bg-green-400 md:w-6/12 md:h-[90%] w-full h-6/12">right</div>
        
      </div>
    </>
  );
}

export default Home;
