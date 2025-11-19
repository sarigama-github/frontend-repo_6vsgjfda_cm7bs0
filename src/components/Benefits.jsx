import ScrollReveal from './ScrollReveal'

export default function Benefits() {
  const benefits = [
    { title: '60% Cost Reduction', desc: 'Eliminate expensive manual counts and traditional data collection methods' },
    { title: '95%+ Accuracy', desc: 'AI-powered detection that outperforms traditional methods' },
    { title: 'Minutes, Not Days', desc: 'Upload video, get results — what used to take weeks now happens in minutes' },
  ]

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(56,189,248,0.12),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Why TraffMind AI</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <p className="mt-2 text-slate-300 max-w-3xl">Enterprise-grade solutions with personal service and proven accuracy.</p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.05}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition-colors">
                <div className="text-xl font-semibold text-white">{b.title}</div>
                <div className="mt-2 text-slate-300">{b.desc}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
