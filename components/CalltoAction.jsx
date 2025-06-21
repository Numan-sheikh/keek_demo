'use client';

import React from 'react';
import Image from 'next/image';
import Button from './Button';

const CallToAction = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gray-950 text-white overflow-hidden">
      {/* Background Images for Desktop */}
      {/* Hidden on mobile, flex on md and up to position images */}
      <div className="hidden md:flex absolute inset-0 z-0 pointer-events-none">
        {/* Content2.svg - Right side, slightly up */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 md:translate-y-[-40%] lg:translate-y-[-50%] opacity-100">
          <Image
            src="/images/Content2.svg"
            alt="Decorative Background Graphic"
            width={700}
            height={700}
            className="object-contain w-full h-full"
          />
        </div>
        {/* Frame_427320552.svg - Left side, slightly down, behind Content2 */}
        <div className="absolute bottom-17 right-48 translate-y-[20%] md:translate-x-[-20%] lg:translate-x-[-30%] opacity-100">
          <Image
            src="/images/Frame_427320552.svg"
            alt="Decorative Background Graphic"
            width={455}
            height={668}
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      {/* Mobile Background Image with Blur */}
      {/* Only visible on screens smaller than md */}
      <div
        className="md:hidden absolute inset-0 z-0 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/Content2.svg)', // Use one of your images
          filter: 'blur(8px)', // Apply blur directly
          opacity: '0.2', // Adjust opacity for subtlety
          transform: 'scale(1.1)' // Slightly scale up to avoid blurred edges
        }}
      ></div>


      {/* Main content container (text and button) */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Content Aligned Left on Desktop, Centered on Mobile */}
        <div className="text-center md:text-left max-w-3xl md:ml-0 lg:ml-24"> {/* md:ml-0 to reset the old fixed margin */}
          <h3 className="text-blue-500 text-sm md:text-base font-bold uppercase tracking-widest mb-4">
            MAKE YOUR MOVE!
          </h3>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-8">
            Ready to monetise with <br className="sm:hidden" /> {/* Hide break on larger screens */}
            Keek?
          </h2>

          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mb-10 mx-auto md:mx-0">
            Find Top Indian Influencers & Grow. Join Keek's<br className="sm:hidden" /> {/* Hide break on larger screens */}
            Community Now.
          </p>

          <div className="w-full flex justify-center md:justify-start"> {/* Center button on mobile, left on desktop */}
            <Button variant="primary" onClick={() => console.log('Join Our Waitlist Clicked in CTA!')}>
              Join Our Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;