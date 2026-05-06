import ListingCard, { Listing } from "../components/ListingCard";

const categories = ["Mobiles", "Electronics", "Fashion", "Vehicles", "Home", "Books"];

const listings: Listing[] = [
  { id: "1", title: "iPhone 14 Pro", price: 720, location: "Austin, TX", seller: "Alex", condition: "Like New", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=80" },
  { id: "2", title: "Gaming Laptop RTX 4060", price: 980, location: "Seattle, WA", seller: "Jordan", condition: "Used", image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=80" },
  { id: "3", title: "Wooden Study Desk", price: 180, location: "Chicago, IL", seller: "Priya", condition: "Used", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=80" },
  { id: "4", title: "Mountain Bike", price: 430, location: "Denver, CO", seller: "Sam", condition: "Like New", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=80" },
  { id: "5", title: "Sony Headphones", price: 140, location: "San Diego, CA", seller: "Mia", condition: "New", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80" },
  { id: "6", title: "Bookshelf Set", price: 95, location: "Phoenix, AZ", seller: "Noah", condition: "Used", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80" }
];

export default function HomePage() {
  return (
    <section className="space-y-10 pb-10">
      <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-sky-900 to-cyan-700 px-6 py-12 text-white shadow-2xl sm:px-10 sm:py-16">
        <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Buy and sell safely on ZipZap</h1>
        <p className="mt-3 max-w-2xl text-sm text-white/85 sm:text-base">A local marketplace where you can discover great deals nearby and sell your items quickly with confidence.</p>
        <form className="mt-6 grid gap-3 rounded-2xl bg-white/95 p-3 shadow-lg sm:grid-cols-[1fr_220px_auto]">
          <input type="text" placeholder="Search listings..." className="h-12 rounded-xl border border-slate-200 px-4 text-sm text-slate-800 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200" />
          <input type="text" placeholder="City or ZIP code" className="h-12 rounded-xl border border-slate-200 px-4 text-sm text-slate-800 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200" />
          <button type="submit" className="h-12 rounded-xl bg-sky-600 px-6 text-sm font-bold text-white transition hover:bg-sky-700">Search</button>
        </form>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Categories</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button key={category} className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 hover:shadow">
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">Featured listings</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}
