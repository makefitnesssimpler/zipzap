import Link from "next/link";
import { notFound } from "next/navigation";
import { mockListings } from "@/data/mockListings";

type ListingDetailPageProps = {
  params: { id: string };
};

export default function ListingDetailPage({ params }: ListingDetailPageProps) {
  const listing = mockListings.find((item) => item.id === params.id);

  if (!listing) {
    notFound();
  }

  return (
    <article className="grid gap-8 lg:grid-cols-2">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <img src={listing.image} alt={listing.title} className="h-full w-full object-cover" />
      </div>
      <div className="space-y-5">
        <div className="space-y-3">
          <p className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{listing.category}</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">{listing.title}</h1>
          <p className="text-xl font-semibold text-brand-700">${listing.price}</p>
        </div>
        <p className="leading-7 text-slate-700">{listing.description}</p>
        <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm">
          <p><span className="font-semibold">Condition:</span> {listing.condition}</p>
          <p><span className="font-semibold">Location:</span> {listing.location}</p>
          <p><span className="font-semibold">Seller:</span> {listing.sellerName}</p>
          <p><span className="font-semibold">Posted:</span> {listing.postedAt}</p>
        </div>
        <div className="flex gap-3">
          <button className="rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">Message Seller</button>
          <Link href="/" className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
            Back to Listings
          </Link>
        </div>
      </div>
    </article>
  );
}
