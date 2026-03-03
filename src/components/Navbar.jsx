import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className='flex justify-between items-center lg:pr-[360px] h-[70px] border w-full relative z-50 bg-[#DFDDC7] min-w-screen'>

        {/* Studio tagline */}
        <div className='ml-4 border-r border-[#4a4639] p-3 h-full flex items-center min-w-0'>
          <h2 className='text-[10px] sm:text-[14px] md:text-[17px] pr-2 md:pr-12 truncate sm:whitespace-normal'>
            AN ARCHITECTURAL <br className="hidden sm:block" />& PRODUCT DESIGN STUDIO
          </h2>
        </div>

        {/* Time zones - always visible on all screen sizes */}
        <div className='flex text-[8px] sm:text-[9px] items-center gap-3 lg:gap-8 font-semibold p-3 border-r border-[#4a4639] h-full'>
          <p>5:21 ET <br />CATSKILLS <br />NEW YORK</p>
          <p className='pr-2 lg:pr-6'>11:22AM CET <br />CATSKILLS <br />BARCELONA SPAIN</p>
        </div>

        {/* Desktop Nav Links */}
        <div className='hidden sm:flex flex-1 lg:flex-none'>
          <ul className='flex items-center justify-center gap-4 text-[12px] md:text-[14px] font-semibold p-3'>
            <li><a className='cursor-pointer hover:underline' href="#home">Home</a></li>
            <li><a className='cursor-pointer hover:underline' href="#projects">Projects</a></li>
            <li><a className='cursor-pointer hover:underline' href="#about">About</a></li>
            <li><a className='cursor-pointer hover:underline' href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Hamburger - mobile only */}
        <div className='flex sm:hidden px-4 items-center shrink-0'>
          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            className='p-2 focus:outline-none text-black'
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu - slides down from navbar */}
      <div
        className={`sm:hidden fixed left-0 right-0 z-1000 bg-[#DFDDC7] border-b border-[#4a4639] overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ top: '70px' }}
      >
        <ul className='flex flex-col items-center gap-6 text-[22px] font-bold py-10'>
          <li>
            <a onClick={() => setIsMenuOpen(false)} href="#home" className='hover:underline'>
              Home
            </a>
          </li>
          <li>
            <a onClick={() => setIsMenuOpen(false)} href="#projects" className='hover:underline'>
              Projects
            </a>
          </li>
          <li>
            <a onClick={() => setIsMenuOpen(false)} href="#about" className='hover:underline'>
              About
            </a>
          </li>
          <li>
            <a onClick={() => setIsMenuOpen(false)} href="#contact" className='hover:underline'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;