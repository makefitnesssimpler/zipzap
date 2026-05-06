import ListingCard from "../components/ListingCard";

const categories = [
  "Electronics",
  "Home",
  "Fashion",
  "Vehicles",
  "Sports",
  "Collectibles",
  "Services",
];

const listings = [
  {
    id: 1,
    title: "MacBook Air M2 13-inch, 16GB RAM",
    price: "$899",
    location: "Austin, TX",
    seller: "Nora K.",
    condition: "Like New" as const,
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Mid-century walnut coffee table",
    price: "$240",
    location: "Seattle, WA",
    seller: "J. Torres",
    condition: "Good" as const,
    image:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Canon EOS R10 + 18-45mm kit lens",
    price: "$690",
    location: "Denver, CO",
    seller: "Maya L.",
    condition: "New" as const,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "City commuter bicycle - aluminum frame",
    price: "$320",
    location: "Portland, OR",
    seller: "Chris P.",
    condition: "Fair" as const,
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
      <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 px-6 py-12 text-white shadow-2xl sm:px-10">
        <p className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-200">
          ZipZap Marketplace
        </p>
        <h1 className="max-w-2xl text-3xl font-extrabold leading-tight sm:text-5xl">
          Buy and sell safely on ZipZap
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-200 sm:text-base">
          Discover local deals, trusted sellers, and verified listings in a cleaner, safer experience.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <input
            placeholder="Search for bikes, furniture, phones..."
            className="h-12 flex-1 rounded-xl border border-white/20 bg-white/95 px-4 text-sm text-slate-800 outline-none ring-cyan-300 transition focus:ring-4"
          />
          <button className="h-12 rounded-xl bg-cyan-500 px-6 text-sm font-bold text-slate-900 transition hover:bg-cyan-400">
            Search
          </button>
        </div>
      </section>

      <section id="categories" className="mt-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-600 hover:shadow"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section id="featured" className="mt-10">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Featured listings</h2>
          <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            View all
          </a>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>
    </main>
  );
}
