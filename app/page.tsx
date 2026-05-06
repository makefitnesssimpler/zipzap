import ListingCard from "../components/ListingCard";
import { mockListings } from "../src/data/mockListings";

const categories = ["Mobiles", "Electronics", "Fashion", "Vehicles", "Home", "Books"];

export default function HomePage() {
  return (
    <section className="space-y-10 pb-10">
      <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-sky-900 to-cyan-700 px-6 py-12 text-white shadow-2xl sm:px-10 sm:py-16">
        <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Buy and sell safely on ZipZap</h1>
        <p className="mt-3 max-w-2xl text-sm text-white/85 sm:text-base">A modern local marketplace for finding great deals nearby and selling your items quickly with confidence.</p>
        <form className="mt-6 grid gap-3 rounded-2xl bg-white/95 p-3 shadow-lg sm:grid-cols-[1fr_220px_auto]">
          <input type="text" placeholder="Search listings..." className="h-12 rounded-xl border border-slate-200 px-4 text-sm text-slate-800 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200" />
          <input type="text" placeholder="City or ZIP code" className="h-12 rounded-xl border border-slate-200 px-4 text-sm text-slate-800 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200" />
          <button type="submit" className="h-12 rounded-xl bg-sky-600 px-6 text-sm font-bold text-white hover:bg-sky-700">Search</button>
        </form>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Categories</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button key={category} className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:border-sky-300 hover:text-sky-700">
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">Featured listings</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mockListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}
