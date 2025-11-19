import Hero from '../components/Hero'
import Products from '../components/Products'
import Industries from '../components/Industries'
import Benefits from '../components/Benefits'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Hero />
      <Products />
      <Industries />
      <Benefits />
    </main>
  )
}
