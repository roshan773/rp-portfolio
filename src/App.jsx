import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar';
import Home from './pages/Home'
import About from './pages/About';
import Footer from './Components/Footer';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <section id='home'><Home /></section>
      <section id='about'><About /></section>
      <section id='skill'><Skills /></section>
      <section id='project'><Project /></section>
      <Testimonial />
      <section id='contact'><Contact /></section>
      <Footer />
    </>
  )
}

export default App
