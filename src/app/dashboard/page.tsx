import Link from "next/link";
import { mockListings } from "@/data/mockListings";

const currentSellerId = "s1";

export default function DashboardPage() {
  const sellerListings = mockListings.filter((listing) => listing.sellerId === currentSellerId);

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Seller Dashboard</h1>
          <p className="mt-1 text-sm text-slate-600">Manage your listings and track activity.</p>
        </div>
        <Link href="/create" className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">+ New Listing</Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Active Listings</p>
          <p className="mt-2 text-2xl font-bold">{sellerListings.length}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Total Views</p>
          <p className="mt-2 text-2xl font-bold">1,284</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Messages</p>
          <p className="mt-2 text-2xl font-bold">23</p>
        </div>
      </div>

      <div className="space-y-3">
        {sellerListings.map((listing) => (
          <div key={listing.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div>
              <p className="font-semibold text-slate-900">{listing.title}</p>
              <p className="text-sm text-slate-600">${listing.price} • {listing.condition} • {listing.postedAt}</p>
            </div>
            <div className="flex gap-2">
              <button className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100">Edit</button>
              <button className="rounded-lg border border-red-200 px-3 py-1.5 text-sm text-red-600 hover:bg-red-50">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
