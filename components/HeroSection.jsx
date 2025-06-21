// components/HeroSection.jsx
'use client';

import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import Button from './Button';


const HeroSection = () => {
  return (
    <section className="relative h-270 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-white flex items-center justify-center p-4 overflow-hidden pt-40px">

      {/*
        This div acts as the container for all your background elements.
        - absolute inset-0 makes it cover the entire section.
        - z-0 places it behind the main content (which will have z-10).
        - pointer-events-none ensures clicks/hovers pass through to elements below.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Individual Circular Images acting as background elements */}

        <Image
          src="/images/Ellipse_12.png" // Path to your image in the public folder
          alt="Background Avatar 1"
          width={450} // Set your desired width
          height={450} // Set your desired height (must match width for perfect circle with rounded-full)
          className=" absolute top-0 right-0
          rotate-180 opacity-100 md:opacity-100" // Added md:opacity-50 for responsiveness
        />

        <Image
          src="/images/Ellipse_13.png" // Path to your image in the public folder
          alt="Background Avatar 1"
          width={450} // Set your desired width
          height={450} // Set your desired height (must match width for perfect circle with rounded-full)
          className=" absolute bottom-16 left-0
          rotate-180 opacity-100 md:opacity-100" // Added md:opacity-50 for responsiveness
        />



        <Image
          src="/icons/Facebook_Round.png" // Path to your image in the public folder
          alt="Background Avatar 1"
          width={39} // Set your desired width
          height={39} // Set your desired height (must match width for perfect circle with rounded-full)
          className="absolute rounded-full object-cover top-48 left-34 transform -translate-x-1/2 -translate-y-1/2 opacity-0 md:opacity-100 sm:opacity-0" // Added md:opacity-50 for responsiveness
        />
        <Image
          src="/icons/icon2.png"
          alt="Background Avatar 2"
          width={58}
          height={58}
          className="absolute rounded-full object-cover top-38 left-76 transform -translate-x-1/2 -translate-y-1/2 opacity-0 md:opacity-100 sm:opacity-0"
        />
        <Image
          src="/icons/iocn6.png"
          alt="Background Avatar 3"
          width={62}
          height={62}
          className="absolute rounded-full object-cover top-78 left-1 transform translate-x-1/2 -translate-y-1/2 opacity-0 md:opacity-100 sm:opacity-0"
        />
        <Image
          src="/icons/Linkedin.png"
          alt="Background Avatar 4"
          width={29}
          height={29}
          className="absolute rounded-full object-cover top-126 left-1/18 opacity-0 md:opacity-100 sm:opacity-0"
        />
        <Image
          src="/icons/icon4.png"
          alt="Background Avatar 5"
          width={58}
          height={58}
          className="absolute rounded-full object-cover bottom-148 left-58 transform -translate-x-1/2 translate-y-1/2 opacity-0 md:opacity-100 sm:opacity-0"
        />

        <Image
          src="/icons/Youtube.png"
          alt="Background Avatar 5"
          width={44}
          height={44}
          className="absolute rounded-full object-cover top-128 right-1 opacity-0 md:opacity-100 sm:opacity-0"/>

        <Image
          src="/icons/Snapchat.png" 
          alt="Background Avatar 5"
          width={38}
          height={38}
          className="absolute rounded-full object-cover top-38 right-1/16 opacity-0 md:opacity-100 sm:opacity-0"
        />
        <Image
          src="/icons/icon5.png"
          alt="Background Avatar 5"
          width={58}
          height={58}
          className="absolute rounded-full object-cover bottom-142 right-1/8 transform -translate-x-1/2 translate-y-1/2 opacity-0 md:opacity-100 sm:opacity-0"
        />

        <Image
          src="/icons/icon1.png"
          alt="Background Avatar 5"
          width={58}
          height={58}
          className="absolute rounded-full object-cover top-76 right-5 opacity-0 md:opacity-100 sm:opacity-0"
        />


          <Image
          src="/icons/icon3.png"
          alt="Background Avatar 5"
          width={58}
          height={58}
          className="absolute rounded-full object-cover top-1/14 right-62 transform -translate-x-1/2 translate-y-1/2 opacity-0 md:opacity-100 sm:opacity-0"
        />
        {/* You can add more images here, adjusting their position, size, and opacity */}
      </div>

      {/*
        Main Content of the Hero Section.
        - relative z-10 ensures it sits above the background images.
      */}
      <div className="flex flex-col items-center justify-center min-h-screen pb-75 text-center px-4 z-10">
        <h2 className="text-3xl sm:text-4xl md:text-7xl pt-20 font-bold leading-tight mb-2 animate-fade-in" style={{ color: '#1A71F6' }}>
          Discover
          <span className="relative inline-block mx-2" style={{ color: '#1A71F6' }}>
            Diverse
          </span>
          Talent:
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-11 animate-fade-in text-white">
          Connect with the Right Creators
        </h3>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-2">
          Presenting to you Keek, a central marketplace for brands and influencers
        </p>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
          to come together and drive impactful results.
          <span className="font-bold text-blue-400 ml-1">KEEK</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button variant="primary" onClick={() => console.log('Join Waitlist Clicked!')}>
            Join Our Waitlist
          </Button>
          <Button variant="secondary" onClick={() => console.log('See Pricing Clicked!')}>
            See Pricing
          </Button>
        </div>
      </div>


      <div className='pb-10' >
        <Image
          src="/images/Brand_Message.png"
          alt="Keek Logo"
          width={700}
          height={340.28}
          className="absolute bottom-0 left-0 opacity-100 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      <div className='pb-10' >
        <Image
          src="/images/Dropdown.png"
          alt="Keek Logo"
          width={120}
          height={125}
          className="absolute bottom-60 left-90 opacity-100 hover:opacity-100 transition-opacity duration-300 z-10"
        />
      </div>

      <div className='pb-10' >
        <Image
          src="/images/Dashboard.png"
          alt="Keek Logo"
          width={1600}
          height={600}
          className="absolute bottom-0 left-40 opacity-100 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      <div className='pb-10' >
        <Image
          src="/images/Discover_Influencers.png"
          alt="Keek Logo"
          width={400}
          height={675}
          className="absolute bottom-0 right-0 opacity-100 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      


    </section>
  );
};

export default HeroSection;