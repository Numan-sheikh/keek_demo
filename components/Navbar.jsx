// components/Navbar.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  // Start with isVisible as false, as you want it hidden initially
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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

      // Condition to show the navbar:
      // 1. User is scrolling UP (currentScrollY < lastScrollY)
      // 2. User is near the top of the page (e.g., within the first 200px)
      //    This makes the "top section" trigger. Adjust 200px as needed.
      // 3. Alternatively, if you want it to appear anytime you scroll up: currentScrollY < lastScrollY
      //    But based on "hit the top section", we'll combine with a top threshold.

      // Logic:
      // If we are at the very top (or very close), always show it.
      if (currentScrollY <= 50) { // Adjust this threshold for "top section"
        setIsVisible(true);
      }
      // If scrolling up AND not at the very top, keep it visible
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      // If scrolling down AND not at the very top, hide it
      else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Set initial visibility based on page load position
      if (window.scrollY <= 50) { // If already at the top on load, show it
        setIsVisible(true);
      } else { // Otherwise, hide it initially
        setIsVisible(false);
      }

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg p-4 shadow-md
        transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white text-3xl font-extrabold tracking-wide">
          KEEK
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200 text-lg font-medium">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg font-medium hidden lg:inline-block">
            Login
          </Link>
          <Button variant="primary" onClick={() => console.log('Get a Free Demo clicked!')}>
            Get a Free Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;