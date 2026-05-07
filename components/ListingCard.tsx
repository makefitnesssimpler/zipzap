type Listing = {
  id: number;
  title: string;
  price: string;
  location: string;
  seller: string;
  condition: "New" | "Like New" | "Good" | "Fair";
  image: string;
};

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={listing.image}
          alt={listing.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-700 shadow">
          {listing.condition}
        </span>
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 text-sm font-semibold text-slate-900 sm:text-base">{listing.title}</h3>
          <p className="shrink-0 text-base font-extrabold text-indigo-600">{listing.price}</p>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 sm:text-sm">
          <span>{listing.location}</span>
          <span>Seller: {listing.seller}</span>
        </div>
      </div>
    </article>
  );
}
