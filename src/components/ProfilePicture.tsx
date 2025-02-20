'use client';

import Image from 'next/image';

export default function ProfilePicture() {
  return (
    <div className="w-full h-full relative">
      <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[398px] mix-blend-lighten">
        <Image
          src="./assets/profile.jpg"
          priority
          quality={100}
          fill
          alt="Profile Picture"
          className="object-contain"
        />
      </div>
    </div>
  );
}
