import { Outlet } from "react-router-dom"; // Use react-router-dom
import Navbar from "./Components/Navbar";


function App() {
  

  return (
    <>
      
        <Navbar />
        <Outlet />
      
    </>
  );
}

export default App;
