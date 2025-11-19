import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import OrbitalCanvas from './OrbitalCanvas'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(59,130,246,0.25),transparent)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <OrbitalCanvas />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200 mb-4"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Advanced Video Analytics Platform
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              Transform Any Video Into Intelligence –
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Highly Accurate Results</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="mt-6 text-lg text-slate-300 max-w-2xl"
            >
              TraffMind AI is a comprehensive video analytics platform that turns any video feed into powerful insights. From traffic analysis to security monitoring, retail analytics to drone tracking.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="mailto:support@traffmind.ai" className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/25">Contact Sales</a>
              <Link to="/technology" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold">Learn More</Link>
            </motion.div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[{ k: '95%+', v: 'Accuracy' }, { k: '24/7', v: 'Processing' }, { k: '60%', v: 'Cost Reduction' }, { k: '<100ms', v: 'Latency' }].map((s, i) => (
                <motion.div
                  key={s.v}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <div className="text-2xl font-bold text-white">{s.k}</div>
                  <div className="text-xs text-slate-400">{s.v}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-2"
            >
              <div className="h-full w-full rounded-xl bg-slate-950/60 flex items-center justify-center text-slate-300 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(400px_circle_at_var(--glow-x,50%)_var(--glow-y,50%),rgba(59,130,246,0.35),transparent_40%)]" />
                <motion.div
                  className="text-3xl font-semibold tracking-tight"
                  animate={{ rotateX: [0, 6, 0], rotateY: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  Video Intelligence OS
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-6 -left-6 hidden sm:block rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4"
            >
              <div className="text-sm text-slate-200 font-semibold">Enterprise Security</div>
              <div className="text-xs text-slate-400">End-to-end Encryption • SOC 2 • GDPR</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
