export function Belief() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
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

      <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-12">
        <p className="font-serif text-xl md:text-2xl text-zinc-400 italic">Our Belief</p>

        <div className="space-y-8">
          <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed">
            We believe that life is a series of <span className="text-amber-600 font-normal">episodes</span>.
          </p>

          <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed">
            Your wedding isn't a folder of files; it's a Season Premiere.
          </p>

          <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed">
            Your inner circle isn't a group chat; it's the Cast.
          </p>

          <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed">
            We build the stage for your story to live forever - where your parents' voices, your friends' laughter, and
            your vows never fade into a folder.
          </p>
        </div>
      </div>
    </section>
  )
}
