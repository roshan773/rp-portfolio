import { useState, useEffect } from 'react'
import './App.css'
import Navigation from './Components/Navigation'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Testimonial from './Components/Testimonial'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = 'auto'
    }, 2000)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'auto'
    }
  }, [])

  return loading ? (
    <div className="custom-loader-container">
      <div className="custom-spinner"></div>
      <p className="loading-text">Loading Portfolio...</p>
    </div>
  ) : (
    <>
      <Navigation />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="project"><Project /></section>
      <Testimonial />
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  )
}

export default App
