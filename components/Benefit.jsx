// components/BenefitSection.jsx
'use client';

import React from 'react';

// Modify this line to accept 'className' as a prop
const BenefitSection = ({ className }) => { // <--- Add { className } here
  return (
    // Apply the passed className to the <section> element
    <section className={`py-16 bg-gray-800 text-white ${className || ''}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Benefits of Using Keek</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit Card 1 */}
          <div className="p-6 rounded-lg shadow-lg bg-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Streamlined Connections</h3>
            <p className="text-gray-300">Easily find and connect with the right influencers and brands.</p>
          </div>

          {/* Benefit Card 2 */}
          <div className="p-6 rounded-lg shadow-lg bg-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Drive Impactful Results</h3>
            <p className="text-gray-300">Collaborate to achieve your marketing and business objectives.</p>
          </div>

          {/* Benefit Card 3 */}
          <div className="p-6 rounded-lg shadow-lg bg-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Centralized Marketplace</h3>
            <p className="text-gray-300">A single platform for all your brand-influencer interactions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;