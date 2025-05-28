import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

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

return (
    <div className="w-full h-[100px] flex justify-center items-center text-black sticky top-0 z-50">
    <nav className="bg-white/70  backdrop-blur-md rounded-lg w-[95%] h-[70%] flex justify-between items-center pl-10 pr-10 gap-10">
        
        {/* Logo */}
        <div className="w-[25%] h-full flex justify-start items-center">
        <h1 className="md:font-bold md:text-2xl text-[18px]">Programming Notes</h1>
        </div>

        {/* Desktop Nav */}
        <div className="w-[50%] h-full justify-center items-center hidden md:flex">
        <ul className="w-full h-full flex justify-around items-center">
            {navItems.map((item, index) => (
            <li 
                key={index} 
                className={`${activeItem === item.toLowerCase() ? 'text-blue-400 flex justify-center items-center' : ''}`}>
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
            <FaFacebook size={24} className="text-blue-600 cursor-pointer" />
            <FaInstagram size={24} className="text-pink-500 cursor-pointer" />
            <FaGithub size={24} className="text-blue-600 cursor-pointer" />
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
        className={`fixed top-0 left-0 h-full w-64 bg-white/80 backdrop-blur-lg shadow-lg transform md:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
    >
        {/* Menu Content */}
        <div className='bg-gray-50 w-full h-[60px] flex justify-start items-center text-[20px] font-bold border-b-1 pl-2'>Programming Notes</div>
        <ul className="mt-5 space-y-6 text-black text-xl pl-6">
        {navItems.map((item, index) => (
            <li 
            key={index} 
            className={`${activeItem === item.toLowerCase() ? 'text-blue-400 ' : ''}`}>
            <Link 
            to={`/${item.toLowerCase()}`} 
            onClick={() => handleItemClick(item.toLowerCase())}>
            {item}
            </Link>
            </li>
            ))}
        </ul>
    </div>
    </div>
);
}

export default Navbar;
