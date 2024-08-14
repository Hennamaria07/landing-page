'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import logo from "../assets/images/PrimaryLogo.svg";
import { Menu, X } from 'lucide-react';
import { navData } from '@/data';

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 h-16 transition-all duration-300 ease-in-out ${scrolling ? 'bg-white shadow-md dark:bg-gray-900' : 'bg-black bg-opacity-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        <ScrollLink href="/" spy smooth offset={-70} duration={500} className="cursor-pointer">
          <Image src={logo} alt="Website Logo" width={208} height={56} className="h-14" />
        </ScrollLink>
        <div className="hidden md:flex space-x-6 items-center">
          {navData?.map(item => (
            <ScrollLink key={item.title} href={item.href} spy smooth offset={-70} duration={500} className={`text-gray-800 dark:text-white ${scrolling ? '' : 'text-white'} hover:text-green-700 cursor-pointer`}>{item.title}</ScrollLink>
          ))}
        </div>
        <div className="md:hidden">
          {/* Mobile menu toggle button */}
          <div className={`${isMenuOpen ? "hidden" : ""} md:hidden`}>
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          <div className={`${isMenuOpen ? "" : "hidden"} md:hidden`}>
            <X onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </div>
      {isMenuOpen && <div>
        {/* Mobile menu links */}
        <div className={`transition-all duration-300 ease-in-out ${scrolling ? 'bg-white dark:bg-gray-900' : 'bg-white'} shadow-md`}>
          {navData?.map(item => (
            <ScrollLink key={item.title} href={item.href} spy smooth offset={-70} duration={500} className="block py-2 px-4 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">{item.title}</ScrollLink>
          ))}
        </div>
      </div>}
    </nav>
  );
}

export default NavBar;

