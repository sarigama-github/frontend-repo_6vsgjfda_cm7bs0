export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="text-white font-semibold">TraffMind AI LLC</div>
            <div className="text-sm">Advanced Video Analytics Platform</div>
          </div>
          <div className="text-sm">
            <div>Email: <a className="text-blue-300 hover:underline" href="mailto:support@traffmind.ai">support@traffmind.ai</a></div>
            <div className="mt-1">LinkedIn: <a className="text-blue-300 hover:underline" href="https://www.linkedin.com/company/traffmind-ai/" target="_blank" rel="noreferrer">@TraffMind AI</a></div>
            <div className="mt-1">Twitter/X: <a className="text-blue-300 hover:underline" href="https://twitter.com/TraffMindAI" target="_blank" rel="noreferrer">@TraffMindAI</a></div>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} TraffMind AI LLC. All rights reserved.</div>
      </div>
    </footer>
  )
}
