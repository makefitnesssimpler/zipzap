import Link from "next/link";
import { Listing } from "../src/types/listing";

type ListingCardProps = {
  listing: Listing;
};

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link href={`/listings/${listing.id}`} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img src={listing.image} alt={listing.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-700 shadow">{listing.condition}</span>
      </div>
      <div className="space-y-2 p-4">
        <h3 className="line-clamp-1 text-base font-bold text-slate-900">{listing.title}</h3>
        <p className="text-xl font-extrabold text-sky-700">${listing.price}</p>
        <p className="text-sm text-slate-600">{listing.location}</p>
        <p className="text-sm text-slate-500">Seller: {listing.sellerName}</p>
      </div>
    </Link>
  );
}
