// components/Navbar.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Brands', href: '#' },
    { name: 'Creators', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Pricing', href: '#' },
  ];

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 50) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsVisible(window.scrollY <= 50);
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }

      const closeMenuOnScroll = () => {
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      };

      window.addEventListener('scroll', closeMenuOnScroll);
      return () => window.removeEventListener('scroll', closeMenuOnScroll);
    }
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed  top-0 left-0 right-0 z-50 py-4 px-4
        transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        ${
          isMobileMenuOpen
            ? 'bg-blue-800' // This is the main navbar's background when mobile menu is OPEN
            : 'bg-opacity-0 backdrop-blur-lg' // This is the main navbar's background when mobile menu is CLOSED (desktop/normal mobile view)
        }
      `}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-3xl font-extrabold tracking-wide z-20"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          KEEK
        </Link>

        {/* Hamburger Icon for Mobile Screens */}
        <div className="md:hidden bg-black flex items-center z-20">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md"
            aria-label={isMobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center bg-opacity-0">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-100 hover:text-white transition-colors duration-200 text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#"
            className="text-gray-100 hover:text-white transition-colors duration-200 text-lg font-medium hidden lg:inline-block"
          >
            Login
          </Link>
          <Button variant="primary" onClick={() => console.log('Get a Free Demo clicked!')}>
            Get a Free Demo
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-opacity-0 transform transition-transform duration-300 ease-in-out md:hidden z-10
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          // FIX: Changed bg-opacity-95 to bg-opacity-100 here for full opaqueness of the mobile menu
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white text-3xl font-extrabold hover:text-blue-200 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#"
            className="text-white text-3xl font-extrabold hover:text-blue-200 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </Link>
          <Button
            variant="primary"
            onClick={() => {
              console.log('Get a Free Demo clicked!');
              setIsMobileMenuOpen(false);
            }}
          >
            Get a Free Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;