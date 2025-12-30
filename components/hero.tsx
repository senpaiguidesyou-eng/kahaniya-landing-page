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
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-amber-600 font-light">
          INTRODUCING MEMORY AS A SERVICE
        </p>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight text-balance">
          Preserving Emotions,
          <br />
          Not Just Files.
        </h1>

        <p className="text-sm md:text-base text-zinc-300 max-w-3xl mx-auto leading-relaxed text-balance pt-4">
          A private, cinematic website that turns your photos and videos into seasons and episodes - designed to be
          watched, not downloaded.
        </p>

        <div className="flex items-center justify-center pt-8">
          <button className="px-10 py-3.5 border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-black transition-all duration-300 text-sm uppercase tracking-widest">
            VIEW THE CONCEPT
          </button>
        </div>
      </div>
    </section>
  )
}
