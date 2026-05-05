export default function CreateListingPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Create Listing</h1>
        <p className="mt-1 text-sm text-slate-600">Post a new item in minutes. (Mock submission only)</p>
      </div>

      <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Title</label>
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand-500 focus:ring" placeholder="e.g. iPhone 15 Pro" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Price ($)</label>
            <input type="number" className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand-500 focus:ring" placeholder="0" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Category</label>
            <select className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand-500 focus:ring">
              <option>Electronics</option><option>Furniture</option><option>Gaming</option><option>Sports</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Condition</label>
          <select className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand-500 focus:ring">
            <option>New</option><option>Like New</option><option>Used</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Description</label>
          <textarea rows={5} className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand-500 focus:ring" placeholder="Describe your item" />
        </div>

        <button type="submit" className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700">Publish Listing</button>
      </form>
    </section>
  );
}
