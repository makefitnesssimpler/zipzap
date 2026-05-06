type CategoryPillProps = {
  label: string;
};

export function CategoryPill({ label }: CategoryPillProps) {
  return (
    <button className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 hover:shadow">
      {label}
    </button>
  );
}
