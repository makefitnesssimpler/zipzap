import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center px-4">
        <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
          Zip<span className="text-sky-600">Zap</span>
        </Link>

        <div className="ml-auto flex items-center gap-2">
          <Link href="/auth" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
            Login
          </Link>
          <Link href="/create" className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700">
            Sell
          </Link>
        </div>
      </div>
    </header>
  );
}
