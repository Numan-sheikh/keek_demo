'use client';

import React from 'react';
// import Image from 'next/image'; // Uncomment if you need to add a logo or other images in the footer

const Footer = () => {
  return (
    <footer className="bg-white py-16 text-gray-700"> {/* Set background, padding, and default text color */}
      <div className="container mx-auto px-4 max-w-6xl"> {/* Main content container for the footer */}
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-gray-200"> {/* Grid for columns, padding-bottom and border */}
          
          {/* Column 1: KEEK Brand Info */}
          <div className="text-left">
            <h4 className="text-lg font-bold text-gray-900 mb-4">KEEK</h4>
            <p className="text-sm leading-relaxed text-gray-600">
              Bridge to collaborate <br />
              brands and influencers
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div className="text-left">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Legal Links */}
          <div className="text-left">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Grievance Redressal Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Follow Us Links */}
          <div className="text-left">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">LinkedIn</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Instagram</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Facebook</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">YouTube</a></li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-sm text-gray-500"> {/* Padding-top for space after border, center text */}
          <p>© 2025. All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;