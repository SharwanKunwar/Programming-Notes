import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {motion} from 'motion/react';

function Navbar() {
const navItems = ['Home', 'About', 'Notes', 'Contact','Projects'];
const [isOpen, setIsOpen] = useState(false);

  // Highlighted: Using useLocation to get the current route
const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname.split('/')[1] || 'home'); // Set activeItem based on current route

useEffect(() => {
    setActiveItem(location.pathname.split('/')[1] || 'home'); // Update active item whenever the route changes
}, [location]);

    const handleItemClick = (item) => {
    setActiveItem(item); // Set active item when clicked
    setIsOpen(false); // Close the menu on item click
};

const [Color, setColor] = useState("#000");


useEffect(() => {
  const characters = "0123456789ABCDEF";
  let holdColor = "#";

const timeout =  setTimeout(() => {
    for (let i = 0; i < 6; i++) {
      holdColor += characters[Math.floor(Math.random() * characters.length)];
    }
    setColor(holdColor);
  }, 5000);

  return () => clearTimeout(timeout); // Cleanup if component unmounts
}); // Empty dependency array to run once on mount


return (
    <div className="w-full h-[100px] flex justify-center  text-black absolute top-0 z-50">
    <nav className="bg-white/70  backdrop-blur-md w-[100%] h-[70%] flex justify-between items-center md:pl-30 pl-10 pr-10 md:pr-30 gap-10">
        
        {/* Logo */}
        <div className="w-[25%] h-full flex justify-start items-center">
        <h1 className="md:font-bold md:text-2xl text-[18px] md:block hidden">Programming- </h1>
        <motion.span
        className='text-2xl font-bold'
        initial={{y: -0, opacity: 0}}
        animate={{
            y:0,
            opacity:100
        }}
        style={{ color: Color }}>Notes</motion.span>
        </div>

        {/* Desktop Nav */}
        <div className="w-[50%] h-full justify-center items-center hidden md:flex">
        <ul className="w-full h-full flex justify-around items-center">
            {navItems.map((item, index) => (
            <li 
                key={index} 
                className={`${activeItem === item.toLowerCase() ? 'text-blue-400 flex justify-center items-center hover:border-b-2' : 'hover:border-b-2'}`}>
                <Link 
                to={`/${item.toLowerCase()}`} 
                onClick={() => handleItemClick(item.toLowerCase())}>
                {item}
                </Link>
            </li>
            ))}
        </ul>
        </div>

        {/* Right Section */}
        <div className="w-[25%] h-full flex md:justify-center justify-end items-center relative">
          {/* Toggle Button */}
        {isOpen ? (
            <button onClick={() => setIsOpen(false)} className="md:hidden block text-black z-50">
            <span className="text-3xl">&times;</span>
            </button>
        ) : (
            <Menu
            onClick={() => setIsOpen(true)}
            size={35}
            className="cursor-pointer md:hidden block text-black z-50"
            />
        )}

          {/* Desktop Social Icons */}
        <section className="md:w-full md:h-full md:flex md:items-center md:justify-end md:gap-5 hidden">
            <FaFacebook size={24} className="text-blue-600 cursor-pointer hover:text-blue-400 hover:border-b-2" />
            <FaInstagram size={24} className="text-pink-500 cursor-pointer hover:text-pink-400 hover:border-b-2" />
            <FaGithub size={24} className="text-blue-600 cursor-pointer hover:text-blue-400 hover:border-b-2" />
        </section>
        </div>
    </nav>

      {/* Background Overlay when menu is open */}
    {isOpen && (
        <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
        />
    )}

{/* Sliding Popup Menu */}
<div
  className={`fixed top-0 right-0 h-full w-[80%] bg-white/80 backdrop-blur-lg shadow-lg transform md:hidden ${
    isOpen ? 'translate-x-0' : 'translate-x-full'
  } transition-transform duration-300 ease-in-out z-40`}
>
  {/* Header with close button */}
  <div className='w-full h-[90px] flex justify-between items-center px-9 pr-10 border-b border-gray-300'>
    <span className="text-[22px] font-bold">Menu</span>
    <button onClick={() => setIsOpen(false)} className="text-3xl font-bold">
      &times;
    </button>
  </div>

  {/* Animated nav items */}
  <ul className="mt-5 space-y-6 text-black text-xl pl-6">
    {navItems.map((item, index) => (
      <motion.li
        key={index}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 50, opacity: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        className={`${activeItem === item.toLowerCase() ? 'bg-sky-400 w-[100%] rounded-tl-2xl rounded-bl-2xl text-white' : ''}`}
      >
        <Link className='text-[20px] flex justify-center w-[90%] h-[50px] items-center'
          to={`/${item.toLowerCase()}`}
          onClick={() => handleItemClick(item.toLowerCase())}
        >
          {item}
        </Link>
      </motion.li>
    ))}
  </ul>
</div>

    </div>
);
}

export default Navbar;
