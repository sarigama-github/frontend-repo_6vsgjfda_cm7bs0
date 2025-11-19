import ScrollReveal from './ScrollReveal'
import ParallaxTilt from './ParallaxTilt'

export default function Products() {
  return (
    <section className="relative py-20 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Products</h2>
            <p className="mt-2 text-slate-300 max-w-3xl">Two flagship products designed for accuracy, scale, and real-world performance.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          <ParallaxTilt className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-6 flex flex-col">
            <a href="https://jamartech.ai" target="_blank" rel="noreferrer" className="flex flex-col h-full">
              <div className="text-xs text-emerald-300 font-medium">Available Now</div>
              <h3 className="mt-2 text-2xl font-semibold text-white">JAMAR AI Portal</h3>
              <p className="mt-2 text-slate-300">Professional video processing platform for configuring various traffic studies and analysis. Get accurate Traffic Volume Counts, Turning Movement Counts & Vehicle Classification Data from any video source.</p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-300">
                <li className="rounded bg-white/5 px-3 py-2">Vehicle Classification Counts</li>
                <li className="rounded bg-white/5 px-3 py-2">Turning movements</li>
                <li className="rounded bg-white/5 px-3 py-2">Professional reports</li>
                <li className="rounded bg-white/5 px-3 py-2">Any video source</li>
                <li className="rounded bg-white/5 px-3 py-2">FHWA-compliant classification</li>
                <li className="rounded bg-white/5 px-3 py-2">Export to PDF, CSV, Excel</li>
              </ul>
              <div className="mt-6 text-blue-300 group-hover:text-blue-200">Visit jamartech.ai →</div>
            </a>
          </ParallaxTilt>

          <ParallaxTilt className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
            <div className="text-xs text-amber-300 font-medium">Coming Soon</div>
            <h3 className="mt-2 text-2xl font-semibold text-white">GridSearch</h3>
            <p className="mt-2 text-slate-300">Connect multiple IP cameras and identify target objects across your entire network. Perfect for security, retail analytics, and industrial monitoring.</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-300">
              <li className="rounded bg-white/5 px-3 py-2">Multi-camera support</li>
              <li className="rounded bg-white/5 px-3 py-2">Custom detection</li>
              <li className="rounded bg-white/5 px-3 py-2">Real-time alerts</li>
              <li className="rounded bg-white/5 px-3 py-2">Enterprise security</li>
              <li className="rounded bg-white/5 px-3 py-2">Cross-camera tracking</li>
              <li className="rounded bg-white/5 px-3 py-2">Scalable architecture</li>
            </ul>
            <div className="mt-6 text-slate-400">Join the waitlist from the GridSearch page</div>
          </ParallaxTilt>
        </div>
      </div>
    </section>
  )
}
