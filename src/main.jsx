import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Root from './Root'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Industries from './pages/Industries'
import Technology from './pages/Technology'
import TechnologySecurity from './pages/TechnologySecurity'
import Consulting from './pages/Consulting'
import GridSearch from './pages/GridSearch'
import LawEnforcement from './pages/LawEnforcement'
import About from './pages/About'
import Contact from './pages/Contact'
import Test from './Test'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Root />}> 
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/technology/security" element={<TechnologySecurity />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/gridsearch" element={<GridSearch />} />
          <Route path="/gridsearch/law-enforcement" element={<LawEnforcement />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
