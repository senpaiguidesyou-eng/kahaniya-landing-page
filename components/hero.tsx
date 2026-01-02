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


        <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed">
          A private, cinematic website that turns your photos and videos into seasons and episodes. <span className="text-[#b79c5a]">Because some moments are meant to stay.</span>
        </p>

        <div className="flex items-center justify-center pt-8">
          <a
            href="#offering"
            className="px-10 py-3.5 border border-[#b79c5a] text-[#b79c5a] hover:bg-[#b79c5a] hover:text-black transition-all duration-300 text-sm uppercase tracking-widest inline-block"
          >
            EXPLORE THE EXPERIENCE NOW
          </a>
        </div>
      </div>
    </section>
  )
}
