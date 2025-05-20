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
import { Sugar } from 'react-preloaders'

function App() {
  const [loading, setLoading] = useState(true)

  

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 5000)
  //   return () => clearTimeout(timer)
  // }, [])

  return loading ? (
    
    <div
      className="loader-container"
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#F3CC30",
        fontFamily: "'Orbitron', sans-serif",
        letterSpacing: "1px"
      }}
    >
      <Sugar color="#212529" size={90} />
      

      <div className="mt-4 text-center futuristic-text">
        <p style={{ margin: 0, fontSize: "18px", opacity: 0.85, color: "#212529" }}>
          Initializing Portfolio...
        </p>
        <p
          style={{
            margin: 0,
            fontSize: "12px",
            animation: "blink 1.2s infinite",
            opacity: 0.6,
            color: "#212529"
          }}
        >
          Please wait<span className="dots">.</span>
        </p>
      </div>
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
