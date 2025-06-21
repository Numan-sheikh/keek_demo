// components/BenefitSection.jsx
'use client';

import React from 'react';
import Image from 'next/image'; // Make sure Image is imported if used

const BenefitSection = () => {
  return (
    
    <section className="relative h-270 py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-left px-18 pt-14 mb-8 text-blue-700 ">
          Why Choose Keek for Influencer Marketing?
        </h2>
        <h1 className="text-4xl font-bold text-left px-18 mb-6 text-black">
          Simple, Innovative,
        </h1>
        <h1 className="text-4xl font-bold text-left px-18 mb-6 text-black">
          Steadfast
        </h1>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-86 left-28 w-[384px] text-left"> {/* Position this div */}
                <Image
                    src="/images/Frame_33664.png"
                    alt="Verified Creators"
                    width={384}
                    height={384}
                    className="mb-6 rounded-lg"
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

          <div className="absolute top-86 left-134 w-[384px] text-left"> {/* Position this div */}
                <Image
                    src="/images/Frame_33664-1.png"
                    alt="Simple Streamlined Campaign Process"
                    width={384}
                    height={384}
                    className="mb-6 rounded-lg"
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

          <div className="absolute top-86 right-3 w-[384px] text-left"> {/* Position this div */}
                <Image
                    src="/images/Frame_33665.png"
                    alt="Secure Payment Processing"
                    width={384}
                    height={384}
                    className="mb-6 rounded-lg"
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

          {/* <div>
            <h2 className='text-2xl font-bold text-left px-18 pt-14 mb-8 text-blue-700'>
              Verified Creators for Every Collaboration Type
            </h2>
          </div> */}

        </div>


      </div>
    </section>
  );
};

export default BenefitSection;