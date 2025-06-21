// components/HowItWorksSection.jsx
'use client';

import React from 'react';
import Image from 'next/image';

const HowItWorksSection = () => {
  return (
    // Removed fixed height and adjusted padding for responsiveness
    <section className="py-16 md:py-24 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4"> {/* Centering container */}

        {/* Top Text Content (now integrated into the flow) */}
        {/* On small screens, text will be full width and center aligned.
            On medium screens and up, text aligns left and takes up part of the width. */}
        <div className="text-center md:text-left md:max-w-xl lg:max-w-2xl mx-auto md:ml-auto md:mr-0 mb-12 lg:mb-16">
          <h2 className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-2">
            HOW IT WORKS
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 text-white">
            Join Keek with simple steps!
          </h3>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto md:mx-0">
            Ready to Launch Influencer Campaigns in India? Here's
            your Quick guide to Keek Onboarding and become
            part of the fun:
          </p>
        </div>

        {/* Main Content Area: Image and Text/Steps */}
        {/* On desktop, this will be a two-column layout. On mobile, it will stack. */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 lg:gap-20">

          {/* Left Column: Content.svg Image */}
          <div className="w-full max-w-lg md:max-w-[558px]"> {/* Responsive width for image */}
            <Image
              src="/images/Content.svg"
              alt="How It Works Content"
              width={558} // Native width
              height={622} // Native height
              className="w-full h-auto rounded-lg shadow-xl" // Ensure image scales
            />
          </div>

          {/* Right Column: Stepper.svg Image (as a visual guide for steps) */}
          {/* This image might conceptually belong near the text, so let's place it here. */}
          <div className="w-full max-w-md md:max-w-[491px]"> {/* Responsive width for image */}
            <Image
              src="/images/Stepper.svg"
              alt="Onboarding Stepper Guide"
              width={491} // Native width
              height={967} // Native height
              className="w-full h-auto rounded-lg shadow-xl" // Ensure image scales
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;