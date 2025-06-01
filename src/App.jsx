import { Outlet } from "react-router-dom"; // Use react-router-dom
import Navbar from "./Components/Navbar";


function App() {
  

  return (
    <>
      
        <Navbar />
        <div className=" w-full h-[80px] md:block "></div>
        <Outlet />
      
    </>
  );
}

export default App;
