'use client';

import React from 'react';
import Image from 'next/image';

const HowItWorksSection = () => {

return (
  <section className="relative h-200 py-16 bg-gray-900">

    <div className="absolute top-40 right-0  text-xl font-bold mb-2 text-blue-500">
      <h2 className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-2">
        HOW IT WORKS
      </h2>
      <h3 className="text-2xl md:text-3xl font-extrabold leading-tight mb-4 text-white">
        Join Keek with simple steps!
      </h3>
      <p className="text-gray-300 text-lg md:text-xl max-w-xl">
        Ready to Launch Influencer Campaigns in India? Here's
        your Quick guide to Keek Onboarding and become<br/>
        part of the fun:
      </p>
    </div>

    <div className="absolute top-40 left-34 w-[558px] text-left">
        <Image
            src="/images/Content.svg"
            alt="Simple Streamlined Campaign Process"
            width={558}
            height={622}
            className="mb-6 rounded-lg"
        />
    </div>

    <div className="absolute bottom-6 right-24 w-[491px] text-left">
        <Image
            src="/images/Stepper.svg"
            alt="Simple Streamlined Campaign Process"
            width={491}
            height={967}
            className="mb-6 rounded-lg"
        />
    </div>
      
    </section>
);
};

export default HowItWorksSection;