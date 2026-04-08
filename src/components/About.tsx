"use client";

export default function About() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content Layer */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 py-[64px] md:px-12 lg:px-24 lg:py-[96px] max-w-[1831px] mx-auto w-full">
        {/* Top Row */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="relative inline-block">
            <h2 className="font-grotesk text-[32px] leading-tight uppercase sm:text-[40px] md:text-[50px] lg:text-[60px]">
              Hello! <br />
              I'm orbis
            </h2>
            <span className="font-condiment text-neon absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 -rotate-1 text-[36px] mix-blend-exclusion sm:text-[48px] md:text-[58px] lg:text-[68px]">
              Orbis
            </span>
          </div>

          <p className="font-mono text-cream max-w-[266px] text-[14px] uppercase sm:text-[16px]">
            A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
          </p>
        </div>

        {/* Bottom Row */}
        <div className="flex w-full items-end justify-between">
          {/* Left Column */}
          <div className="flex flex-col gap-4 opacity-10 lg:block text-[#010828] lg:text-cream">
            <p className="font-mono text-[14px] uppercase lg:text-[16px]">
              A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
            </p>
            <p className="font-mono text-[14px] uppercase lg:text-[16px]">
              A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
            </p>
          </div>

          {/* Right Column (Desktop Only) */}
          <div className="hidden flex-col gap-4 opacity-10 lg:flex max-w-[266px]">
            <p className="font-mono text-[16px] uppercase">
              A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
            </p>
            <p className="font-mono text-[16px] uppercase">
              A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
