export default function Industries() {
  const items = [
    { title: 'Transportation', desc: 'Traffic analysis, vehicle counting, and infrastructure monitoring', features: ['Vehicle classification', 'Turning movement counts'] },
    { title: 'Security & Law Enforcement', desc: 'Surveillance, object detection, and evidence compilation', features: ['License plate recognition', 'Multi-camera search'] },
    { title: 'Retail & Analytics', desc: 'Customer behavior, foot traffic, and store optimization', features: ['Parking optimization', 'Customer flow analysis'] },
    { title: 'Industrial & Drones', desc: 'Equipment monitoring, drone tracking, and safety compliance', features: ['Equipment monitoring', 'Safety compliance'] },
    { title: 'Life Sciences & Research', desc: 'Cell tracking, particle analysis, and biological research applications', features: [] },
    { title: 'Construction', desc: 'Site monitoring, equipment tracking, and safety compliance for construction projects', features: ['Equipment monitoring', 'Safety compliance'] },
    { title: 'Events & Venues', desc: 'Crowd flow analysis and traffic management for stadiums, festivals, and large venues', features: ['Crowd flow analysis', 'Traffic optimization'] },
    { title: 'Smart Cities', desc: 'Urban planning and infrastructure optimization for modern city development', features: ['Urban planning', 'Infrastructure optimization'] },
  ]

  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Industries</h2>
          <p className="mt-2 text-slate-300 max-w-3xl">Purpose-built for transportation, security, retail, industrial monitoring, and more.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-slate-300">{item.desc}</p>
              {item.features?.length > 0 && (
                <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-300">
                  {item.features.map(f => (
                    <li key={f} className="rounded bg-white/5 px-3 py-2">{f}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
