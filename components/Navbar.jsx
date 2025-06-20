// components/Navbar.jsx
'use client'; // <-- Add this line

import React from 'react';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  const navLinks = [
    { name: 'Brands', href: '#' },
    { name: 'Creators', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Pricing', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-lg p-4 shadow-md">
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