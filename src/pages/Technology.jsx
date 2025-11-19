export default function Technology() {
  const core = [
    { title: 'Deep Learning', desc: 'Custom neural networks trained on millions of traffic and security scenarios' },
    { title: 'Computer Vision', desc: 'Advanced object detection and tracking with 99.2% accuracy' },
    { title: 'Real-Time Processing', desc: 'Sub-second response times with edge computing capabilities' },
    { title: 'Big Data Analytics', desc: 'Scalable processing of massive video datasets and pattern recognition' },
  ]

  const metrics = [
    { k: 'Detection Accuracy', v: '99.2%' },
    { k: 'Processing Speed', v: '<100ms' },
    { k: 'Uptime', v: '99.9%' },
    { k: 'Concurrent Streams', v: '1000+' },
  ]

  const stack = [
    'PyTorch & TensorFlow', 'YOLO v8 & Custom CNNs', 'OpenCV', 'MLOps Deployment',
    'AWS & Azure', 'Kubernetes', 'Docker', 'Auto-scaling',
    'Apache Kafka', 'Redis Caching', 'PostgreSQL', 'ETL Pipelines',
    'End-to-end Encryption', 'RBAC', 'GDPR Compliance', 'SOC 2'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-tight">Cutting-Edge AI Technology</h1>
        <p className="mt-3 text-slate-300 max-w-3xl">Built on state-of-the-art deep learning and computer vision technology, designed specifically for transportation and security applications.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {core.map(item => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xl font-semibold">{item.title}</div>
              <div className="mt-2 text-slate-300">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map(m => (
            <div key={m.k} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-2xl font-bold">{m.v}</div>
              <div className="text-xs text-slate-400">{m.k}</div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Technology Stack</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {stack.map(s => (
              <div key={s} className="rounded-lg border border-white/10 bg-white/5 p-3 text-slate-200 text-sm">{s}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
