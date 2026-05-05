import ListingCard from "../components/ListingCard";
import { mockListings } from "../data/mockListings";

const categories = ["Electronics", "Cars", "Home", "Fashion", "Gaming", "Sports", "Books", "Pets"];

export default function HomePage() {
  return (
    <section className="space-y-10 pb-10">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-sky-700 to-slate-900 px-6 py-12 text-white shadow-2xl sm:px-10 sm:py-16">
        <div className="absolute -top-16 right-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 left-8 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="relative z-10 max-w-3xl">
          <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">Local marketplace</p>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">Buy & sell anything near you</h1>
          <p className="mt-3 text-sm text-white/85 sm:text-base">Find trusted local deals, chat with sellers, and sell items in minutes.</p>

          <form className="mt-6 grid gap-3 rounded-2xl bg-white/95 p-3 shadow-lg ring-1 ring-white/30 sm:grid-cols-[1fr_180px_auto]">
            <input type="text" placeholder="Search items" className="h-12 rounded-xl border border-slate-200 px-4 text-sm text-slate-800 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" />
            <input type="text" placeholder="City or ZIP" className="h-12 rounded-xl border border-slate-200 px-4 text-sm text-slate-800 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" />
            <button type="submit" className="h-12 rounded-xl bg-brand-600 px-6 text-sm font-bold text-white hover:bg-brand-700">Search</button>
          </form>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Browse categories</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button key={category} className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:border-brand-300 hover:text-brand-700">
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">Featured Listings</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mockListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}
