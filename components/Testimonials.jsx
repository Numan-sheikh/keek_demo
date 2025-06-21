'use client';

import React from 'react';
import Image from 'next/image';

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden"> {/* Use responsive padding, remove fixed height */}
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* "WHAT THEY SAY" Heading */}
        <h3 className="text-blue-600 text-sm md:text-base font-bold uppercase tracking-widest mb-2">
          WHAT THEY SAY
        </h3>

        {/* "Hear from our Keeksters!" Heading */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-6 text-gray-900">
          Hear from our Keeksters!
        </h3>

        {/* Paragraph Description */}
        <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12"> {/* Added margin-bottom */}
          We love and value our vibrant community who've experienced <br className="sm:hidden" /> {/* Hide br on larger screens */}
          the power of Keek firsthand.
        </p>

        {/* Testimonial Cards Section - Use Flexbox for responsiveness */}
        {/* On small screens, stack vertically (flex-col). On medium screens and up, display in a row (md:flex-row). */}
        {/* Use `gap` for spacing between cards. */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 lg:gap-12 mb-12"> {/* Added margin-bottom for nav buttons */}
          {/* Testimonial Card 1 */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-[384px] text-left">
            <Image
              src="/images/Frame_33685.svg"
              alt="Testimonial Image 1"
              width={384}
              height={384}
              className="mb-6 rounded-lg w-full h-auto" // Ensure image scales
            />
            {/* You might want to add actual testimonial text here if these are image-only cards */}
          </div>

          {/* Testimonial Card 2 */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-[384px] text-left">
            <Image
              src="/images/Frame_33686.svg"
              alt="Testimonial Image 2"
              width={384}
              height={384}
              className="mb-6 rounded-lg w-full h-auto"
            />
          </div>

          {/* Testimonial Card 3 */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-[384px] text-left">
            <Image
              src="/images/Frame_33687.svg"
              alt="Testimonial Image 3"
              width={384}
              height={384}
              className="mb-6 rounded-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Navigation Buttons - Now positioned relative to the content flow */}
        <div className="flex justify-center items-center space-x-4">
          {/* Left Arrow Button */}
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
            <span className="text-2xl font-bold">&larr;</span>
          </button>

          {/* Right Arrow Button */}
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <span className="text-2xl font-bold">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;