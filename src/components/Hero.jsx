import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(59,130,246,0.25),transparent)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200 mb-4">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Advanced Video Analytics Platform
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Transform Any Video Into Intelligence –
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Highly Accurate Results</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl">
              TraffMind AI is a comprehensive video analytics platform that turns any video feed into powerful insights. From traffic analysis to security monitoring, retail analytics to drone tracking.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:support@traffmind.ai" className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/25">Contact Sales</a>
              <Link to="/technology" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold">Learn More</Link>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">95%+</div>
                <div className="text-xs text-slate-400">Accuracy</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-slate-400">Processing</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">60%</div>
                <div className="text-xs text-slate-400">Cost Reduction</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">{'<100ms'}</div>
                <div className="text-xs text-slate-400">Latency</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-2">
              <div className="h-full w-full rounded-xl bg-slate-950/60 flex items-center justify-center text-slate-300">
                Video Intelligence OS
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
              <div className="text-sm text-slate-200 font-semibold">Enterprise Security</div>
              <div className="text-xs text-slate-400">End-to-end Encryption • SOC 2 • GDPR</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
