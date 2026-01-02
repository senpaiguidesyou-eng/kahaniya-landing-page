export function Belief() {
  return (
    <section className="relative py-20 px-6 bg-black overflow-hidden">
      {/* Subtle star particles background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            opacity: 0.15,
          }}
        />
      </div>

      <div className="container mx-auto max-w-[720px] relative z-10 flex flex-col items-center">
        {/* Section Label */}
        <p className="font-sans text-[12px] lg:text-[14px] font-medium tracking-[0.18em] uppercase text-[#b79c5a] mb-8 lg:mb-8 text-center">
          Our Belief
        </p>

        {/* Primary Line */}
        <p className="font-serif text-[28px] lg:text-[42px] font-medium leading-[1.3] lg:leading-[1.25] tracking-[-0.01em] text-white text-center max-w-[560px] mb-12 lg:mb-12">
          Life unfolds in episodes.
        </p>

        {/* Supporting Lines Container - Left Aligned but Centered Block */}
        <div className="flex flex-col items-start w-full gap-8 lg:gap-8 mb-14 lg:mb-14">
          {/* Wedding */}
          <p className="font-serif text-[18px] lg:text-[26px] font-normal leading-[1.6] text-white text-left max-w-[420px]">
            Your story isn’t a folder of files <br className="hidden md:block" />- It’s a Season Premiere.
          </p>

          {/* Inner Circle */}
          <p className="font-serif text-[18px] lg:text-[26px] font-normal leading-[1.6] text-white text-left max-w-[420px]">
            Your inner circle isn't a group chat <br className="hidden md:block" />- it's the Cast.
          </p>
        </div>

        {/* Closing Line */}
        <p className="font-serif text-[16px] lg:text-[22px] font-normal leading-[1.7] lg:leading-[1.8] text-white text-center italic max-w-[360px]">
          We build a place where voices, laughter, and vows are never lost to a download.
        </p>
      </div>
    </section>
  )
}
