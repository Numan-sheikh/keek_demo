// components/BenefitSection.jsx
'use client';

import React from 'react';
import Image from 'next/image';

const BenefitSection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden"> {/* Added overflow-hidden for safety */}
      <div className="container mx-auto px-4 text-center">
        {/* Title Section */}
        <div className="mb-12 md:mb-16 lg:mb-20"> {/* Add margin-bottom for spacing */}
          <h2 className="text-xl md:text-2xl font-bold text-left pl-4 md:pl-18 pt-14 text-blue-700">
            Why Choose Keek for Influencer Marketing?
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-left pl-4 md:pl-18 mb-2 text-black">
            Simple, Innovative,
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold text-left pl-4 md:pl-18 text-black">
            Steadfast
          </h1>
        </div>

        {/* Benefit Cards Section - Use Flexbox for responsiveness */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 lg:gap-12 mt-12 md:mt-0"> {/* Added gap, and removed absolute positioning */}
          {/* Benefit Card 1 */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-[384px] text-left"> {/* max-w-sm/md/lg for fluid width */}
            <Image
              src="/images/Frame_33664.png"
              alt="Verified Creators"
              width={384}
              height={384}
              className="mb-6 rounded-lg w-full h-auto" // Ensure image scales
            />
            <h3 className="text-xl font-bold mb-2 text-black">
              Verified Creators for Every Collaboration Type
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Keek hosts a network of verified creators ready to
              collaborate across all engagement models—
              whether it's barter deals, User-Generated Content
              (UGC), or paid partnerships.
            </p>
          </div>

          {/* Benefit Card 2 */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-[384px] text-left">
            <Image
              src="/images/Frame_33664-1.png"
              alt="Simple Streamlined Campaign Process"
              width={384}
              height={384}
              className="mb-6 rounded-lg w-full h-auto"
            />
            <h3 className="text-xl font-bold mb-2 text-black">
              Simple Streamlined Campaign Process
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Keek provides a user-friendly interface to create a
              detailed campaign briefs to facilitate seamless
              communication with creators within the platform.
            </p>
          </div>

          {/* Benefit Card 3 */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-[384px] text-left">
            <Image
              src="/images/Frame_33665.png"
              alt="Secure Payment Processing"
              width={384}
              height={384}
              className="mb-6 rounded-lg w-full h-auto"
            />
            <h3 className="text-xl font-bold mb-2 text-black">
              Secure Payment Processing via Razorpay Integration:
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Keek integrates with Razorpay to provide robust
              security features, multiple payment method support,
              and detailed transaction record between brands and
              creators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;