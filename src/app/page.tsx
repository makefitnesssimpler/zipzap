import { CategoryPill } from "@/components/CategoryPill";
import { ListingCard } from "@/components/ListingCard";
import { SearchBar } from "@/components/SearchBar";
import { mockListings } from "@/data/mockListings";

const categories = ["Electronics", "Furniture", "Gaming", "Sports", "Fashion", "Cars", "Home", "Books"];

export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-sky-500 px-5 py-10 text-white shadow-xl sm:px-8 sm:py-14">
        <p className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">Trusted local marketplace</p>
        <h1 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">Buy and sell almost anything near you.</h1>
        <p className="mt-3 max-w-2xl text-sm text-white/90 sm:text-base">Find great deals from real people in your city. Simple, safe, and fast.</p>
        <div className="mt-6">
          <SearchBar />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Shop by category</h2>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {categories.map((category) => (
            <CategoryPill key={category} label={category} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Featured listings</h2>
            <p className="mt-1 text-sm text-slate-600">Fresh picks from top-rated sellers</p>
          </div>
          <p className="text-sm text-slate-500">{mockListings.length} items</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mockListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>

      <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-3">
        <div>
          <p className="text-base font-semibold text-slate-900">Verified local community</p>
          <p className="mt-2 text-sm text-slate-600">Profiles, listing history, and consistent moderation.</p>
        </div>
        <div>
          <p className="text-base font-semibold text-slate-900">Safe meetup tips</p>
          <p className="mt-2 text-sm text-slate-600">Meet in public places and inspect items before paying.</p>
        </div>
        <div>
          <p className="text-base font-semibold text-slate-900">Quick messaging</p>
          <p className="mt-2 text-sm text-slate-600">Contact sellers fast and close deals smoothly.</p>
        </div>
      </div>
    </section>
  );
}
