export default function Solutions() {
  const capabilities = [
    'Universal Video Support',
    'Real-Time Processing',
    'Enterprise Security',
    'Scalable Infrastructure',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-tight">Our Video Analytics Solutions</h1>
        <p className="mt-3 text-slate-300 max-w-3xl">
          Purpose-built video analytics tools designed for different industries and use cases. From traffic analysis to security monitoring, we have the solution for your needs.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {capabilities.map(c => (
            <div key={c} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xl font-semibold">{c}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
