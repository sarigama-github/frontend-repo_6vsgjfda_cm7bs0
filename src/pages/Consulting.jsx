export default function Consulting() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-tight">Consulting</h1>
        <p className="mt-3 text-slate-300 max-w-3xl">Boutique AI solutions with personal service. We build custom, enterprise-grade video analytics tailored to your needs.</p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Engagements</h2>
          <ul className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-slate-200 text-sm">
            <li className="rounded bg-white/5 px-3 py-2">Custom Model Development</li>
            <li className="rounded bg-white/5 px-3 py-2">Edge + Cloud Architecture</li>
            <li className="rounded bg-white/5 px-3 py-2">MLOps & Deployment</li>
            <li className="rounded bg-white/5 px-3 py-2">Data Pipelines & Labeling</li>
            <li className="rounded bg-white/5 px-3 py-2">Security & Compliance</li>
            <li className="rounded bg-white/5 px-3 py-2">Performance Optimization</li>
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Get in Touch</h2>
          <p className="mt-2 text-slate-300">Email us to discuss your project and request a proposal.</p>
          <a href="mailto:support@traffmind.ai?subject=Consulting%20Inquiry" className="inline-block mt-4 px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold">Contact Sales</a>
        </div>
      </div>
    </div>
  )
}
