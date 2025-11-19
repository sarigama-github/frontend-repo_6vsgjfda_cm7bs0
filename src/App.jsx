import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App