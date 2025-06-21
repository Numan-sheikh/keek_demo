'use client'; // If you're using this in a client component in Next.js 13+

import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js


const TestimonialsSection = () => {
  return (
    <section className="relative h-230 py-24 bg-white"> {/* Background color and padding for the section */}
      <div className="container mx-auto px-4 max-w-4xl text-center"> {/* Main content container */}
        
        {/* "WHAT THEY SAY" Heading */}
        <h3 className="text-blue-600 text-sm md:text-base font-bold uppercase tracking-widest mb-2">
          WHAT THEY SAY
        </h3>

        {/* "Hear from our Keeksters!" Heading */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-6 text-gray-900">
          Hear from our Keeksters!
        </h3>

        {/* Paragraph Description */}
        <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
          We love and value our vibrant community who've experienced <br/>
          the power of Keek firsthand.
        </p>

        {/* This div contains the Frame_3368x.svg images as per your provided code */}
        {/* These images are absolutely positioned within this 'absolute inset-0' container */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-86 left-28 w-[384px] text-left">
                <Image
                    src="/images/Frame_33685.svg"
                    alt="Image 1"
                    width={384}
                    height={384}
                    className="mb-6 rounded-lg"
                />
            </div>

            <div className="absolute top-86 left-128 w-[384px] text-left">
                <Image
                    src="/images/Frame_33686.svg"
                    alt="Image 2"
                    width={384}
                    height={384}
                    className="mb-6 rounded-lg"
                />
            </div>

            <div className="absolute top-86 right-13 w-[384px] text-left">
                <Image
                    src="/images/Frame_33687.svg"
                    alt="Image 3"
                    width={384}
                    height={384}
                    className="mb-6 rounded-lg"
                />
            </div>
        </div>

        {/* **** START: Added Navigation Buttons - Positioned ABSOLUTELY underneath the images **** */}
        {/* Placed relative to the 'section' for consistent positioning below the absolutely placed images.
            The 'top' value is calculated based on the images' 'top-86' + their 'height=384' + an additional offset (e.g., 50px) for spacing.
            This value will need to be adjusted based on your specific layout and how the section height (`h-200`) affects it.
        */}
        <div 
          className="absolute  left-1/2 -translate-x-1/2 z-10" 
          style={{ top: 'calc(86px + 384px + 288px)' }} 
        >
          <div className="flex justify-center  items-center space-x-4">
            {/* Left Arrow Button */}
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
              <span className="text-2xl font-bold">&larr;</span> {/* Left arrow character */}
            </button>

            {/* Right Arrow Button */}
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <span className="text-2xl font-bold">&rarr;</span> {/* Right arrow character */}
            </button>
          </div>
        </div> {/* **** END: Added Navigation Buttons **** */}

      </div>
    </section>
  );
};

export default TestimonialsSection;