export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Subtle star particles background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_50%)]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            opacity: 0.1,
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8">
        <h1
          className="text-[34px] md:text-[66px] lg:text-[80px] font-serif text-white tracking-tight leading-[1.1]"
          style={{ fontFamily: 'var(--font-playfair), "Georgia", serif' }}
        >
          Preserving Emotions,
          <br />
          <span className="text-[#b79c5a]">Not Just Files.</span>
        </h1>


        <p className="text-[15px] md:text-xl text-white max-w-2xl mx-auto leading-relaxed pt-10">
          A private, cinematic website that turns your photos and videos into seasons and episodes. Because some moments are meant to stay.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
          <a
            href="#offering"
            className="px-6 py-2.5 md:px-8 md:py-3.5 bg-[#b79c5a] text-black hover:bg-[#cbb06d] transition-all duration-300 text-xs md:text-sm uppercase tracking-widest font-medium"
          >
            EXPLORE THE EXPERIENCE NOW
          </a>

        </div>
      </div>
    </section>
  )
}
