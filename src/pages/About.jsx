import React from 'react'
import "./About.css";

const About = () => {
  return (
    <div className='container-fluid py-5' style={{ backgroundColor: "#000", color: "white" }}>
      <div className='row'>
        <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
          <img src="/About.png" alt="profile image" className='img-fluid w-100 h-100' />
        </div>
        <div className='col-12 col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center p-4' style={{maxWidth: "900px"}}>
          <h1>Hi, Again Folks</h1>
          <p>I’m Roshan a Full Stack Web Developer who loves turning ideas into interactive, pixel-perfect websites. I’ve completed full-stack development training and am still leveling up with tools like Redux, Next.js, Prompt Engineering — because in tech, there’s always a next level.</p>
          <p>From portfolio sites and product showcases to creative design platforms, I focus on building clean, responsive, and user-friendly experiences. My short-term goal? Land a role where I can contribute to real-world projects and grow alongside a talented team. My long-term mission? Build my own web development agency, Roshan Tech Studio, crafting high-quality digital solutions that businesses can proudly show off.</p>
          <p>After all, why settle for “just working” when you can create something that makes people say, Whoa, that’s cool?</p>
          <a href="/Website developer Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-light" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", fontSize: "20px" }}>
            RESUME
          </a>
        </div>
      </div>
    </div>
  )
}

export default About