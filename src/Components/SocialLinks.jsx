import React from 'react'
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SocialLinks() {
  return (
    <div>
        {/* Desktop Social Icons */}
              <section className="w-full h-[100px] flex items-center justify-center gap-10 md:hidden">
                  <a href="#facebook"><FaFacebook size={35} className="text-blue-600 cursor-pointer hover:text-blue-400 hover:border-b-2" /></a>
                  <a href="#instagram"><FaInstagram size={35} className="text-pink-500 cursor-pointer hover:text-pink-400 hover:border-b-2" /></a>
                  <a href="https://github.com/SharwanKunwar"><FaGithub size={35} className="text-blue-600 cursor-pointer hover:text-blue-400 hover:border-b-2" /></a>
              </section>
    </div>
  )
}

export default SocialLinks
