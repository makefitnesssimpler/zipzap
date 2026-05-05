import Link from "next/link";
import { Listing } from "@/types/listing";

type ListingCardProps = {
  listing: Listing;
};

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link
      href={`/listings/${listing.id}`}
      className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img src={listing.image} alt={listing.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow">{listing.category}</span>
        <span className="absolute bottom-4 left-4 rounded-xl bg-brand-600 px-3 py-1.5 text-sm font-bold text-white shadow-lg">${listing.price}</span>
      </div>

      <div className="space-y-3 p-5">
        <h3 className="line-clamp-1 text-lg font-bold text-slate-900">{listing.title}</h3>
        <p className="line-clamp-2 text-sm leading-6 text-slate-600">{listing.description}</p>
        <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-sm text-slate-600">
          <p className="font-medium">{listing.sellerName}</p>
          <p>{listing.location}</p>
        </div>
      </div>
    </Link>
  );
}
