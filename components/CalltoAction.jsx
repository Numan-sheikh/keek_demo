'use client';

import React from 'react';
import Image from 'next/image'; // Make sure this is correctly imported
import Button from './Button'; 

const CallToAction = () => {
  return (
    <section className="relative h-130 py-24 bg-gray-950 text-white overflow-hidden"> {/* Added overflow-hidden for absolute images */}
      
      {/* Background Image (Content2.svg) - Positioned subtly without obscuring text */}
      {/* Moved this image div to be a direct child of the section,
          and adjusted positioning/z-index to be behind content. */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"> {/* Covers section, behind content */}
          <div className="absolute top-76 right-0 -translate-x-0 -translate-y-1/2 opacity-100"> {/* Adjust top/left as needed */}
              <Image
                  src="/images/Content2.svg"
                  alt="Decorative Background Graphic" // Changed alt text as it's decorative
                  width={700} // Increased size, adjust as needed
                  height={700} // Increased size, adjust as needed
                  className="object-contain" // Ensure it fits without cropping too much
              />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/8 -translate-y-1/4 opacity-100"> {/* Adjust top/left as needed */}
              <Image
                  src="/images/Frame_427320552.svg"
                  alt="Decorative Background Graphic" // Changed alt text as it's decorative
                  width={455} // Increased size, adjust as needed
                  height={668} // Increased size, adjust as needed
                  className="object-contain" // Ensure it fits without cropping too much
              />
          </div>
      </div>

      {/* Main content container (text and button) - Should be on top of the background image */}
      <div className="container mx-auto px-4 max-w-3xl md:ml-16 lg:ml-24 relative z-10"> {/* Added relative z-10 to bring content to front */}
        
        <h3 className="text-blue-500 text-sm md:text-base font-bold uppercase tracking-widest mb-4 text-left">
          MAKE YOUR MOVE!
        </h3>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-8 text-left">
          Ready to monetise with <br />
          keek?
        </h2>

        <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mb-10 text-left">
          Find Top Indian Influencers & Grow. Join Keek's<br/>
           Community Now.
        </p>

        <div className="text-left"> 
          <Button variant="primary" onClick={() => console.log('Join Our Waitlist Clicked in CTA!')}>
            Join Our Waitlist
          </Button>
        </div>

      </div>
    </section>
  );
};

export default CallToAction;