import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About';
import Footer from './Components/Footer';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';
import Loader from './Components/Loader'

function App() {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setloading(false), 3000)
    return () => clearTimeout(timer)
  })

  return (
    <>
      {loading ? (<Loader />) : (
        <div>
          <section id='home'><Home /></section>
          <section id='about'><About /></section>
          <section id='skill'><Skills /></section>
          <section id='project'><Project /></section>
          <Testimonial />
          <section id='contact'><Contact /></section>
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
