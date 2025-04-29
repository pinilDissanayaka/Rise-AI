"use client";

import Image from "next/image";

export default function MobileHeader() {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 sm:hidden">
      <div className="backdrop-blur-xl
                      rounded-b-xl px-6 py-2 shadow-[0_4px_12px_#00f0ff33] 
                      flex items-center justify-center"
      >
        <Image
          src="/rise_digital_logo.png"
          alt="Rise Digital Logo"
          width={100}
          height={36}
          className="object-contain"
        />
      </div>
    </div>
  );
}