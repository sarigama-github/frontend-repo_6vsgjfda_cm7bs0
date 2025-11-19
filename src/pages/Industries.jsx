export default function IndustriesPage() {
  const industries = [
    { title: 'Transportation', desc: 'Traffic analysis, vehicle counting, and infrastructure monitoring', use: 'Traffic counts, turning movements, signal timing optimization for DOTs and engineering firms', feats: ['Vehicle classification', 'Turning movement counts'] },
    { title: 'Security & Law Enforcement', desc: 'Surveillance, object detection, and evidence compilation', use: 'Vehicle tracking, evidence compilation, investigation support for police departments', feats: ['License plate recognition', 'Multi-camera search', 'Multi-jurisdictional support'] },
    { title: 'Retail & Analytics', desc: 'Customer behavior, foot traffic, and store optimization', use: null, feats: ['Parking optimization', 'Customer flow analysis'] },
    { title: 'Industrial & Drones', desc: 'Equipment monitoring, drone tracking, and safety compliance', use: null, feats: ['Equipment monitoring', 'Safety compliance'] },
    { title: 'Life Sciences & Research', desc: 'Cell tracking, particle analysis, and biological research applications', use: null, feats: [] },
    { title: 'Construction', desc: 'Site monitoring, equipment tracking, and safety compliance for construction projects', use: null, feats: ['Equipment monitoring', 'Safety compliance'] },
    { title: 'Events & Venues', desc: 'Crowd flow analysis and traffic management for stadiums, festivals, and large venues', use: null, feats: ['Crowd flow analysis', 'Traffic optimization'] },
    { title: 'Smart Cities', desc: 'Urban planning and infrastructure optimization for modern city development', use: null, feats: ['Urban planning', 'Infrastructure optimization'] },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-tight">Industries</h1>
        <p className="mt-3 text-slate-300 max-w-3xl">Built for transportation, security, retail, industrial monitoring, and more.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {industries.map(item => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xl font-semibold">{item.title}</div>
              <div className="mt-2 text-slate-300">{item.desc}</div>
              {item.use && <div className="mt-3 text-slate-300 text-sm"><span className="font-semibold text-slate-200">Use Cases: </span>{item.use}</div>}
              {item.feats?.length > 0 && (
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  {item.feats.map(f => (
                    <div key={f} className="rounded bg-white/5 px-3 py-2 text-slate-200">{f}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
