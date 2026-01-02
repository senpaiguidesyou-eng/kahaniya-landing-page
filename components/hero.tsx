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
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-none">
          Preserving Emotions,
          <br />
          <span className="text-[#b79c5a]">Not Just Files.</span>
        </h1>


        <p className="text-lg md:text-xl text-white max-w-xl mx-auto leading-relaxed">
          A private, cinematic website that turns your photos and videos into seasons and episodes. <br /> Because some moments are meant to stay.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
          <a
            href="#offering"
            className="px-8 py-3.5 bg-[#b79c5a] text-black hover:bg-[#cbb06d] transition-all duration-300 text-sm uppercase tracking-widest font-medium"
          >
            EXPLORE THE EXPERIENCE NOW
          </a>
          <a
            href="#pricing"
            className="px-8 py-3.5 bg-black border border-[#b79c5a] text-[#b79c5a] hover:bg-[#b79c5a] hover:text-black transition-all duration-300 text-sm uppercase tracking-widest"
          >
            Check Out The Pricing
          </a>
        </div>
      </div>
    </section>
  )
}
