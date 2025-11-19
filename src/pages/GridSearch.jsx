export default function GridSearch() {
  const features = [
    'Multi-Camera Support',
    'Custom Detection',
    'Real-time Alerts',
    'Analytics Dashboard',
    'Enterprise Security',
    'Easy Configuration',
  ]

  const useCases = [
    'Law Enforcement',
    'Retail Analytics',
    'Industrial Monitoring',
    'Security Operations',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-tight">GridSearch Multi-Camera Network</h1>
        <p className="mt-3 text-slate-300 max-w-3xl">Connect multiple IP cameras and identify target objects across your entire network. Perfect for security, retail analytics, and industrial monitoring applications.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Features</h2>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {features.map(f => (
                <div key={f} className="rounded bg-white/5 px-3 py-2 text-slate-200 text-sm">{f}</div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Use Cases</h2>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {useCases.map(u => (
                <div key={u} className="rounded bg-white/5 px-3 py-2 text-slate-200 text-sm">{u}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Join the Waitlist</h2>
          <p className="mt-2 text-slate-300">Be the first to try GridSearch. We’ll notify you when it’s available.</p>
          <a href="mailto:support@traffmind.ai?subject=GridSearch%20Waitlist" className="inline-block mt-4 px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold">Join Waitlist</a>
        </div>
      </div>
    </div>
  )
}
