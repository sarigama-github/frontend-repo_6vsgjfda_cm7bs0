export default function TechnologySecurity() {
  const items = [
    { title: 'End-to-End Encryption', desc: 'All data encrypted in transit and at rest with industry-standard protocols' },
    { title: 'SOC 2 Compliant', desc: 'Annual security audits and compliance with industry standards' },
    { title: 'Privacy First', desc: 'GDPR compliant with data retention policies and user controls' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-tight">Security & Compliance</h1>
        <p className="mt-3 text-slate-300 max-w-3xl">Enterprise security with rigorous compliance to keep your data safe.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map(i => (
            <div key={i.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xl font-semibold">{i.title}</div>
              <div className="mt-2 text-slate-300">{i.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
