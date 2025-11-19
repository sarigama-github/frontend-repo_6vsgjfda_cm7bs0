export default function Placeholder({ title, subtitle }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-3 text-slate-300 max-w-3xl">{subtitle}</p>}
      </div>
    </div>
  )
}
