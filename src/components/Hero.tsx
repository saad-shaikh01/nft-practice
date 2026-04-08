"use client";

import { Mail, X, Code } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden rounded-b-[32px]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content Layer */}
      <div className="relative z-10 flex h-full flex-col px-6 py-8 md:px-12 lg:px-24">
        {/* Header */}
        <header className="flex w-full items-center justify-between">
          <div className="font-grotesk text-[16px] uppercase tracking-wider">
            Orbis.Nft
          </div>

          <nav className="liquid-glass hidden items-center gap-8 rounded-[28px] px-[52px] py-[24px] lg:flex">
            {["Homepage", "Gallery", "Buy NFT", "FAQ", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-grotesk text-[13px] uppercase transition-colors hover:text-neon"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Empty div for flex spacing balance if nav is hidden */}
          <div className="w-[100px] lg:hidden" />
        </header>

        {/* Hero Content */}
        <div className="flex flex-1 flex-col justify-center">
          <div className="relative max-w-[780px] lg:ml-32">
            <h1 className="font-grotesk text-[40px] leading-[1.05] uppercase sm:text-[60px] md:text-[75px] lg:text-[90px] lg:leading-[1]">
              Beyond earth <br />
              and ( its ) familiar boundaries
            </h1>
            
            {/* Cursive Accent */}
            <span className="font-condiment text-neon absolute -right-4 top-1/2 -translate-y-1/2 -rotate-1 text-[24px] opacity-90 mix-blend-exclusion sm:text-[32px] md:text-[40px] lg:text-[48px] lg:right-[-100px]">
              Nft collection
            </span>
          </div>

          {/* Social Icons Mobile */}
          <div className="mt-12 flex justify-center gap-4 lg:hidden">
            <SocialButtons />
          </div>
        </div>

        {/* Social Icons Desktop */}
        <div className="absolute right-12 top-12 hidden flex-col gap-4 lg:flex">
          <SocialButtons />
        </div>
      </div>
    </section>
  );
}

function SocialButtons() {
  return (
    <>
      {[Mail, X, Code].map((Icon, i) => (
        <button
          key={i}
          className="liquid-glass flex h-[56px] w-[56px] items-center justify-center rounded-[1rem] transition-colors hover:bg-white/10"
        >
          <Icon size={20} />
        </button>
      ))}
    </>
  );
}
