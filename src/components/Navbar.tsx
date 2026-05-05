import Link from "next/link";

const desktopLink = "text-sm font-medium text-slate-600 transition hover:text-brand-600";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-extrabold tracking-tight text-slate-900">
            ZipZap
          </Link>
          <nav className="hidden items-center gap-5 md:flex">
            <Link href="/" className={desktopLink}>Browse</Link>
            <Link href="/create" className={desktopLink}>Sell</Link>
            <Link href="/dashboard" className={desktopLink}>My Listings</Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/create" className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:inline-flex">
            + Create
          </Link>
          <Link href="/auth" className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
