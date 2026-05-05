export function SearchBar() {
  return (
    <form className="flex w-full flex-col gap-3 rounded-2xl bg-white/95 p-3 shadow-lg ring-1 ring-slate-200 sm:flex-row sm:items-center">
      <input
        type="text"
        placeholder="Search for phones, furniture, bikes..."
        className="h-12 flex-1 rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
      />
      <input
        type="text"
        placeholder="Location"
        className="h-12 rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 sm:w-44"
      />
      <button
        type="submit"
        className="h-12 rounded-xl bg-brand-600 px-6 text-sm font-semibold text-white transition hover:bg-brand-700"
      >
        Search
      </button>
    </form>
  );
}
