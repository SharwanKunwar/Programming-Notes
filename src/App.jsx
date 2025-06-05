import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  
  return (
    <>
      <Navbar />
      <div className="w-full h-[80px]"></div>
      <Outlet />
    </>
  );
}

export default App;
