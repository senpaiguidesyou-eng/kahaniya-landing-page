export function FolderProblem() {
  return (
    <section className="relative py-32 px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-16 items-start">
          {/* Left column - Text content */}
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-light">THE CURRENT STATE</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white text-balance">
                The "Folder" Problem
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-lg text-zinc-300 leading-relaxed">
                You spend lakhs on a venue. You hire the best photographers.
                <br />
                You curate every detail of the wedding.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed">
                And then? You deliver the most important memories of their life in a generic, lifeless cloud folder.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed">
                The emotion is lost the moment they click "Download".
              </p>
            </div>
          </div>

          {/* Middle column - Vertical divider */}
          <div className="hidden lg:block w-px bg-zinc-800 self-stretch" />

          {/* Right column - Comparison */}
          <div className="space-y-8">
            {/* The Old Way */}
            <div className="space-y-4">
              <h3 className="text-base text-zinc-400 font-light">The Old Way</h3>
              <div className="space-y-2 font-mono text-sm text-zinc-500">
                <div className="flex items-center gap-3">
                  <span className="text-zinc-600">&gt;</span>
                  <span>IMG_8829.jpg</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-zinc-600">&gt;</span>
                  <span>DSC_9921.mov</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-zinc-600">&gt;</span>
                  <span>Final_Edit_V3.mp4</span>
                </div>
              </div>
            </div>

            {/* Gold divider line */}
            <div className="h-px bg-gradient-to-r from-[#E6BE77] to-transparent w-32" />

            {/* The Kahani Way */}
            <div className="space-y-4">
              <h3 className="text-base font-light" style={{ color: "#E6BE77" }}>
                The Kahani Way
              </h3>
              <div className="space-y-4">
                <div className="font-serif text-2xl text-white">"Rahul & Priya: Season 1"</div>
                <div className="text-sm text-zinc-400">
                  <span style={{ color: "#E6BE77" }}>Ep 1:</span>
                  <span> The Haldi</span>
                  <span className="text-zinc-600"> • </span>
                  <span style={{ color: "#E6BE77" }}>Ep 2:</span>
                  <span> The Vows</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
