import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative border-t border-zinc-900 bg-black py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div
              className="font-serif text-2xl font-bold text-white"
              style={{ fontFamily: 'var(--font-playfair), "Georgia", serif' }}
            >
              Kahaania
            </div>
            <p className="text-sm text-zinc-500">The Archive of Your Life</p>
          </div>

          <div className="flex items-center gap-8">

            <Link href="#privacy" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-900 text-center text-sm text-zinc-600">
          <p>© 2025 Kahaania. Where memories become legacy.</p>
        </div>
      </div>
    </footer>
  )
}
