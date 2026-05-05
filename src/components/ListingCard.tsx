import Link from "next/link";
import { Listing } from "@/types/listing";

type ListingCardProps = {
  listing: Listing;
};

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link
      href={`/listings/${listing.id}`}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <img src={listing.image} alt={listing.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-700 shadow">
          {listing.category}
        </span>
      </div>

      <div className="space-y-3 p-4">
        <h3 className="line-clamp-1 text-base font-semibold text-slate-900">{listing.title}</h3>
        <p className="line-clamp-2 text-sm leading-6 text-slate-600">{listing.description}</p>

        <div className="flex items-center justify-between border-t border-slate-100 pt-3">
          <div>
            <p className="text-xl font-extrabold text-slate-900">${listing.price}</p>
            <p className="text-xs text-slate-500">{listing.condition}</p>
          </div>
          <div className="text-right text-xs text-slate-500">
            <p>{listing.location}</p>
            <p className="mt-1">by {listing.sellerName}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
