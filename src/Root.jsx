import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Root() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
