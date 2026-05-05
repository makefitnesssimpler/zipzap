import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-3 px-4">
        <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
          Market<span className="text-brand-600">Hub</span>
        </Link>

        <div className="hidden flex-1 md:block">
          <input
            type="text"
            placeholder="Search products, brands, sellers..."
            className="h-10 w-full rounded-full border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Link href="/create" className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
            Sell
          </Link>
          <Link href="/auth" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
