import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-3 px-4">
        <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
          Zip<span className="text-sky-600">Zap</span>
        </Link>

        <div className="hidden flex-1 md:block">
          <input
            type="text"
            placeholder="Search phones, cars, books..."
            className="h-10 w-full rounded-full border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Link href="/auth" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
            Login
          </Link>
          <Link href="/create" className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700">
            Sell
          </Link>
        </div>
      </div>
    </header>
  );
}
