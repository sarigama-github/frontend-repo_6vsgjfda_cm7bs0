export default function About() {
  const teams = [
    { title: 'AI Engineers', desc: 'Deep learning specialists with expertise in computer vision and video analytics' },
    { title: 'Industry Experts', desc: 'Experts with deep understanding of transportation, security, and retail applications' },
    { title: 'Platform Architects', desc: 'Engineers building scalable, secure video analytics infrastructure' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-tight">Our Team</h1>
        <p className="mt-3 text-slate-300 max-w-3xl">AI specialists with deep expertise in computer vision and video analytics.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {teams.map(t => (
            <div key={t.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xl font-semibold">{t.title}</div>
              <div className="mt-2 text-slate-300">{t.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Contact</h2>
          <div className="mt-2 text-slate-300">
            <div>Email: <a href="mailto:support@traffmind.ai" className="text-blue-300 hover:underline">support@traffmind.ai</a></div>
            <div className="mt-1">LinkedIn: <a href="https://www.linkedin.com/company/traffmind-ai/" target="_blank" rel="noreferrer" className="text-blue-300 hover:underline">TraffMind AI</a></div>
            <div className="mt-1">Twitter/X: <a href="https://twitter.com/TraffMindAI" target="_blank" rel="noreferrer" className="text-blue-300 hover:underline">@TraffMindAI</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}
