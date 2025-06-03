import { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

function Navbar() {
  const navItems = ['Home', 'Notes', 'Projects', 'Contact'];
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname.split('/')[1] || 'home');
  const [Color, setColor] = useState("#000");
  const navRef = useRef();

  // Handle active item change on route change
  useEffect(() => {
    setActiveItem(location.pathname.split('/')[1] || 'home');
  }, [location]);

  // Handle navbar title color update every 5s
  useEffect(() => {
    const characters = "0123456789ABCDEF";
    let holdColor = "#";
    const timeout = setTimeout(() => {
      for (let i = 0; i < 6; i++) {
        holdColor += characters[Math.floor(Math.random() * characters.length)];
      }
      setColor(holdColor);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  // Locking scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Click outside to close mobile menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsOpen(false);
  };

  return (
    <div className="w-full h-[100px] flex justify-center text-black absolute top-0 z-50">
      <nav className="bg-white/70 backdrop-blur-md w-full h-[70%] flex justify-between items-center md:pl-30 pl-10 pr-10 md:pr-30 gap-10">
        {/* Logo */}
        <div className="w-[25%] h-full flex justify-start items-center">
          <a href="/"><h1 className="md:font-bold md:text-2xl text-[18px] md:block hidden">Programming- </h1></a>
          <motion.span
            onClick={() => window.location.reload()}
            className="text-2xl font-bold cursor-pointer"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{ color: Color }}
          >
            Notes
          </motion.span>
        </div>

        {/* Desktop Nav */}
        <div className="w-[50%] h-full justify-center items-center hidden md:flex">
          <ul className="w-full h-full flex justify-around items-center">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`${activeItem === item.toLowerCase()
                  ? 'text-blue-400 flex justify-center items-center hover:border-b-2'
                  : 'hover:border-b-2'}`}
              >
                <Link to={`/${item.toLowerCase()}`} onClick={() => handleItemClick(item.toLowerCase())}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-[25%] h-full flex md:justify-center justify-end items-center relative">
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
            <a href="#facebook"><FaFacebook size={25} className="text-blue-600 cursor-pointer hover:text-blue-400 hover:border-b-2" /></a>
            <a href="#instagram"><FaInstagram size={25} className="text-pink-500 cursor-pointer hover:text-pink-400 hover:border-b-2" /></a>
            <a href="https://github.com/SharwanKunwar"><FaGithub size={25} className="text-blue-600 cursor-pointer hover:text-blue-400 hover:border-b-2" /></a>
          </section>
        </div>
      </nav>

      {/* Background Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
        />
      )}

      {/* Mobile Nav with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={navRef}
            key="mobile-nav"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-[80%] bg-white/80 backdrop-blur-lg shadow-lg z-40 md:hidden"
          >
            {/* Header */}
            <div className="w-full h-[90px] flex justify-between items-center px-9 pr-10 border-b border-gray-300">
              <span className="text-[22px] font-bold">Menu</span>
              <button onClick={() => setIsOpen(false)} className="text-3xl font-bold">
                &times;
              </button>
            </div>

            {/* Animated Nav Items */}
            <motion.ul
              className="mt-5 space-y-6 text-black text-xl pl-6"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className={`${activeItem === item.toLowerCase()
                    ? 'bg-sky-400 w-full rounded-tl-2xl rounded-bl-2xl text-white'
                    : ''}`}
                >
                  <motion.button
                    className="text-[20px] flex justify-center w-[90%] h-[50px] items-center cursor-pointer"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleItemClick(item.toLowerCase())}
                  >
                    <Link to={`/${item.toLowerCase()}`} className="w-full h-full flex justify-center items-center">
                      {item}
                    </Link>
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
