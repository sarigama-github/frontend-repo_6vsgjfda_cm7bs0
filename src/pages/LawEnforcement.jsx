export default function LawEnforcement() {
  const features = [
    'Vehicle Search & Tracking',
    'Evidence Compilation',
    'Multi-Jurisdictional Support',
    'Analytics & Reporting',
  ]

  const useCases = [
    'Hit-and-Run Investigations',
    'Stolen Vehicle Recovery',
    'Traffic Violation Enforcement',
    'Criminal Investigation Support',
  ]

  const benefits = [
    'Secure & Compliant (CJIS)',
    'Fast & Accurate (95%+)',
    'Multi-Agency Support',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-tight">GridSearch for Law Enforcement</h1>
        <p className="mt-3 text-slate-300 max-w-3xl">Advanced vehicle tracking and evidence compilation platform designed specifically for law enforcement investigations. Search across camera networks, track suspect vehicles, and solve cases faster.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Features</h2>
            <div className="mt-3 grid gap-2">
              {features.map(f => (
                <div key={f} className="rounded bg-white/5 px-3 py-2 text-slate-200 text-sm">{f}</div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Use Cases</h2>
            <div className="mt-3 grid gap-2">
              {useCases.map(u => (
                <div key={u} className="rounded bg-white/5 px-3 py-2 text-slate-200 text-sm">{u}</div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Benefits</h2>
            <div className="mt-3 grid gap-2">
              {benefits.map(b => (
                <div key={b} className="rounded bg-white/5 px-3 py-2 text-slate-200 text-sm">{b}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Request a Demo</h2>
          <p className="mt-2 text-slate-300">See how GridSearch can accelerate your investigations.</p>
          <a href="mailto:support@traffmind.ai?subject=GridSearch%20Law%20Enforcement%20Demo" className="inline-block mt-4 px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold">Request Demo</a>
        </div>
      </div>
    </div>
  )
}
