import ListingCard from "../components/ListingCard";

const featuredListings = [
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

const hotDeals = [
  {
    id: 1,
    title: "iPhone 14 Pro 128GB",
    price: "$649",
    oldPrice: "$799",
    discount: "19% OFF",
    location: "San Diego, CA",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Sony WH-1000XM5 Headphones",
    price: "$229",
    oldPrice: "$329",
    discount: "30% OFF",
    location: "Phoenix, AZ",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "L-shaped fabric sofa set",
    price: "$540",
    oldPrice: "$720",
    discount: "25% OFF",
    location: "Nashville, TN",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Nintendo Switch OLED",
    price: "$255",
    oldPrice: "$349",
    discount: "27% OFF",
    location: "Miami, FL",
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=1200&q=80",
  },
];

const categories = [
  { icon: "📱", title: "Mobiles", description: "Smartphones, accessories and wearables." },
  { icon: "💻", title: "Electronics", description: "Laptops, cameras, audio and gadgets." },
  { icon: "👗", title: "Fashion", description: "Clothes, shoes, bags and style essentials." },
  { icon: "🚗", title: "Vehicles", description: "Cars, bikes and trusted local auto deals." },
  { icon: "🛋️", title: "Home & Furniture", description: "Decor, appliances and furniture finds." },
  { icon: "📚", title: "Books", description: "Novels, textbooks and study material." },
  { icon: "🏀", title: "Sports", description: "Fitness gear, equipment and outdoor items." },
  { icon: "🧰", title: "Services", description: "Repairs, classes and local professionals." },
];

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-900 to-cyan-700 px-6 py-12 text-white shadow-2xl sm:px-10 sm:py-14">
        <p className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-100">
          ZipZap Marketplace
        </p>
        <h1 className="max-w-2xl text-3xl font-extrabold leading-tight sm:text-5xl">
          Buy and sell safely on ZipZap
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-100 sm:text-base">
          Discover verified listings, message trusted sellers, and close great local deals with confidence.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <input
            placeholder="Search for phones, furniture, vehicles..."
            className="h-12 flex-1 rounded-xl border border-white/20 bg-white/95 px-4 text-sm text-slate-800 outline-none ring-cyan-300 transition focus:ring-4"
          />
          <button className="h-12 rounded-xl bg-cyan-300 px-6 text-sm font-bold text-slate-900 transition hover:bg-cyan-200">
            Search
          </button>
        </div>
      </section>

      <section id="hot-deals" className="mt-12">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Hot deals near you</h2>
          <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">See all deals</a>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hotDeals.map((deal) => (
            <article
              key={deal.id}
              className="group overflow-hidden rounded-2xl border border-rose-100 bg-gradient-to-b from-rose-50 to-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={deal.image} alt={deal.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-rose-500 px-2.5 py-1 text-xs font-bold text-white shadow">
                  {deal.discount}
                </span>
              </div>
              <div className="space-y-2 p-4">
                <h3 className="line-clamp-2 text-sm font-semibold text-slate-900 sm:text-base">{deal.title}</h3>
                <div className="flex items-end gap-2">
                  <p className="text-lg font-extrabold text-rose-600">{deal.price}</p>
                  <p className="text-sm text-slate-400 line-through">{deal.oldPrice}</p>
                </div>
                <p className="text-xs font-medium text-slate-500 sm:text-sm">{deal.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="categories" className="mt-14">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Shop by category</h2>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">Explore what you need across popular ZipZap categories.</p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.title}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
            >
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-xl">
                {category.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900">{category.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{category.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="featured" className="mt-14">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Featured listings</h2>
          <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">View all</a>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

      <section id="sell" className="mt-14 rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-6 text-white shadow-xl sm:p-10">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Start selling on ZipZap</h2>
        <p className="mt-3 max-w-2xl text-sm text-violet-100 sm:text-base">
          Turn unused items into cash in minutes. Create a listing, connect with local buyers, and sell with built-in safety tips.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            "1. Add item details",
            "2. Chat with buyers",
            "3. Complete the sale safely",
          ].map((step) => (
            <div key={step} className="rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold backdrop-blur-sm">
              {step}
            </div>
          ))}
        </div>
        <button className="mt-7 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-indigo-700 shadow transition hover:-translate-y-0.5 hover:bg-indigo-50">
          Post your first listing
        </button>
      </section>
    </main>
  );
}
