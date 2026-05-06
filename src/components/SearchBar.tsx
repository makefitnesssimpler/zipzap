export function SearchBar() {
  return (
    <form className="mt-2 grid gap-3 rounded-2xl bg-white/95 p-3 shadow-lg ring-1 ring-white/30 sm:grid-cols-[1fr_180px_auto]">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="h-12 rounded-xl border border-slate-200 px-4 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
      />
      <input
        type="text"
        placeholder="City or ZIP"
        className="h-12 rounded-xl border border-slate-200 px-4 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
      />
      <button
        type="submit"
        className="h-12 rounded-xl bg-brand-600 px-6 text-sm font-bold text-white transition hover:bg-brand-700"
      >
        Search
      </button>
    </form>
  );
}
