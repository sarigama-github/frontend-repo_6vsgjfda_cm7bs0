export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
        <p className="mt-3 text-slate-300">We respond quickly and provide personal service. Email us and we will reach out within 24 hours.</p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div>Email: <a className="text-blue-300 hover:underline" href="mailto:support@traffmind.ai">support@traffmind.ai</a></div>
          <div className="mt-2">LinkedIn: <a className="text-blue-300 hover:underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/traffmind-ai/">TraffMind AI</a></div>
          <div className="mt-2">Twitter/X: <a className="text-blue-300 hover:underline" target="_blank" rel="noreferrer" href="https://twitter.com/TraffMindAI">@TraffMindAI</a></div>
        </div>
      </div>
    </div>
  )
}
