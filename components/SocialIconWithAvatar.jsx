// components/SocialIconWithAvatar.jsx
'use client';

import React from 'react';
import Image from 'next/image';

const SocialIconWithAvatar = ({ avatarSrc, socialIconSrc, alt = 'user avatar', className = '' }) => {
  return (
    <div className={`relative w-20 h-20 rounded-full bg-gray-700 p-1 shadow-xl flex items-center justify-center ${className}`}>
      {/* Avatar Image */}
      <Image
        src={avatarSrc || 'https://via.placeholder.com/60/CCCCCC/FFFFFF?text=AV'} // Fallback placeholder
        alt={alt}
        width={60}
        height={60}
        className="rounded-full object-cover"
      />
      {/* Social Icon Overlay (conditionally rendered) */}
      {socialIconSrc && (
        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-gray-900">
          <Image
            src={socialIconSrc}
            alt={`${alt} social icon`}
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default SocialIconWithAvatar;