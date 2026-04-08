"use client";

import { ChevronRight } from "lucide-react";

const nfts = [
  {
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4",
    score: "8.7/10",
  },
  {
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4",
    score: "9/10",
  },
  {
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4",
    score: "8.2/10",
  },
];

export default function NFTCollection() {
  return (
    <section className="bg-background py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1831px] mx-auto w-full">
        {/* Header Row */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="relative">
            <h2 className="font-grotesk text-[32px] uppercase sm:text-[40px] md:text-[50px] lg:text-[60px] leading-tight">
              Collection of <br />
              <span className="flex items-center gap-4 ml-12 sm:ml-24 lg:ml-32">
                <span className="font-condiment text-neon lowercase">Space</span>
                <span>objects</span>
              </span>
            </h2>
          </div>

          <button className="group flex flex-col items-start gap-1">
            <div className="flex items-baseline gap-2 font-grotesk uppercase">
              <span className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px]">See</span>
              <div className="flex flex-col leading-none">
                <span className="text-[14px] sm:text-[20px] md:text-[28px] lg:text-[36px]">All</span>
                <span className="text-[14px] sm:text-[20px] md:text-[28px] lg:text-[36px]">Creators</span>
              </div>
            </div>
            <div className="h-[6px] w-full bg-neon rounded-full sm:h-[8px] lg:h-[10px] transition-all group-hover:scale-x-110" />
          </button>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nfts.map((nft, i) => (
            <div
              key={i}
              className="liquid-glass group rounded-[32px] p-[18px] transition-colors hover:bg-white/10"
            >
              <div className="relative overflow-hidden rounded-[24px] pb-[100%]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src={nft.video} type="video/mp4" />
                </video>
              </div>

              {/* Card Footer Bar */}
              <div className="liquid-glass mt-[18px] flex items-center justify-between rounded-[20px] px-5 py-4">
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider text-cream/70">
                    Rarity Score:
                  </span>
                  <span className="font-grotesk text-[16px] uppercase tracking-wide">
                    {nft.score}
                  </span>
                </div>

                <button className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] shadow-lg shadow-purple-500/50 transition-transform hover:scale-110">
                  <ChevronRight size={24} className="text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
