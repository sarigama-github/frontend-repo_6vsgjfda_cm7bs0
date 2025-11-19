import ScrollReveal from './ScrollReveal'

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <ScrollReveal y={8}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200 mb-3">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            {eyebrow}
          </div>
        </ScrollReveal>
      )}
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{title}</h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.08}>
          <p className="mt-2 text-slate-300 max-w-3xl">{subtitle}</p>
        </ScrollReveal>
      )}
    </div>
  )
}
