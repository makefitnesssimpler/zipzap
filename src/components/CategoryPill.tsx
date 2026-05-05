type CategoryPillProps = {
  label: string;
};

export function CategoryPill({ label }: CategoryPillProps) {
  return (
    <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-brand-300 hover:text-brand-700">
      {label}
    </button>
  );
}
