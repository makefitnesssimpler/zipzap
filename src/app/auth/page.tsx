export default function AuthPage() {
  return (
    <section className="mx-auto grid max-w-5xl gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-2 lg:p-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Welcome back</h1>
        <p className="text-slate-600">Sign in to manage listings, chat with buyers, and publish new products.</p>
      </div>

      <form className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
          <input type="email" className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand-500 focus:ring" placeholder="you@example.com" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
          <input type="password" className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand-500 focus:ring" placeholder="••••••••" />
        </div>
        <button type="submit" className="w-full rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">Login</button>
        <p className="text-center text-sm text-slate-500">No account? <span className="font-medium text-brand-700">Create one</span> (mock flow)</p>
      </form>
    </section>
  );
}
