"use client";

import { Mail, X, Code } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* Background Video - Native Aspect Ratio */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
          type="video/mp4"
        />
      </video>

      {/* Text Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-end lg:pr-[20%] lg:pl-[15%] pointer-events-none">
        <div className="relative text-right pointer-events-auto">
          <span className="font-condiment text-neon absolute -top-8 -left-8 -translate-y-full text-[17px] mix-blend-exclusion sm:text-[34px] md:text-[51px] lg:text-[68px]">
            Go beyond
          </span>
          <h2 className="font-grotesk text-[16px] uppercase leading-tight sm:text-[30px] md:text-[45px] lg:text-[60px]">
            <span className="block mb-4 sm:mb-8 lg:mb-12">Join us.</span>
            <span className="block">Reveal what's hidden.</span>
            <span className="block">Define what's next.</span>
            <span className="block">Follow the signal.</span>
          </h2>
        </div>
      </div>

      {/* Social Icons Bottom-Left */}
      <div className="absolute left-[8%] bottom-[12%] lg:bottom-[20%]">
        <div className="liquid-glass flex flex-col rounded-[0.5rem] sm:rounded-[0.8rem] md:rounded-[1rem] lg:rounded-[1.25rem]">
          {[Mail, X, Code].map((Icon, i) => (
            <button
              key={i}
              className={`flex items-center justify-center 
                w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem]
                h-[10vw] sm:h-[8rem] md:h-[6rem] lg:h-[9.375rem]
                transition-colors hover:bg-white/10
                ${i !== 2 ? "border-b border-white/10" : ""}
              `}
            >
              <Icon className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
