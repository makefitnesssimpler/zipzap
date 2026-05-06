export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 text-sm font-black text-white shadow-lg shadow-cyan-500/30">
            ZZ
          </div>
          <div>
            <p className="text-lg font-extrabold tracking-tight text-slate-900">ZipZap</p>
            <p className="text-xs text-slate-500">Trusted local marketplace</p>
          </div>
        </div>

        <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          <a className="transition hover:text-slate-900" href="#featured">Featured</a>
          <a className="transition hover:text-slate-900" href="#categories">Categories</a>
          <a className="transition hover:text-slate-900" href="#">How it works</a>
        </div>

        <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow transition hover:-translate-y-0.5 hover:bg-slate-800">
          Post listing
        </button>
      </nav>
    </header>
  );
}
