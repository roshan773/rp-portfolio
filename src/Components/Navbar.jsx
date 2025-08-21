import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Navbar.css"

const Navbar = () => {

    return (
        <>
            {/* 🔹 For larger screens */}
            <div className='d-none d-lg-block' style={{zIndex: 2000 }}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container justify-content-center">
                        <ul className="navbar-nav d-flex align-items-center nav">

                            {/* Left links */}
                            <li className="nav-item px-2"><a href="#home" className="nav-link">HOME</a></li>
                            <li className="nav-item px-2"><a href="#about" className="nav-link">ABOUT</a></li>
                            <li className="nav-item px-2"><a href="#skill" className="nav-link">SKILL</a></li>

                            {/* Logo in the middle */}
                            <a className="navbar-brand" href="/">
                                <img src="/Logo.png" alt="Logo" className="img-fluid" style={{ height: "80px" }} />
                            </a>

                            {/* Right links */}
                            <li className="nav-item px-2"><a href="#project" className="nav-link">PROJECT</a></li>
                            <li className="nav-item px-2"><a href="#contact" className="nav-link">CONTACT</a></li>

                            {/* Resume button */}
                            <a
                                href="/FullStack Developer.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button"
                                style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", fontSize: "20px" }}
                            >
                                RESUME
                            </a>

                        </ul>
                    </div>
                </nav>
            </div>

            {/* 🔹 For smaller screens */}
            <div className="d-block d-lg-none nav" style={{zIndex: 2000 }}>
                <div className='d-flex justify-content-between align-items-center'>
                    {/* Logo */}
                    <a className="navbar-brand" href="/">
                        <img
                            src="/Logo.png"
                            alt="Logo"
                            className="img-fluid"
                            style={{ height: "80px" }}
                        />
                    </a>

                    <div className='d-flex align-items-center'>
                        {/* Resume Button */}
                        <a
                            href="/FullStack Developer.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button me-3"
                            style={{
                                fontFamily:
                                    "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                                fontSize: "20px",
                            }}
                        >
                            RESUME
                        </a>

                        {/* Hamburger Button (Bootstrap collapse trigger) */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <GiHamburgerMenu size={30} />
                        </button>
                    </div>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#home" className="nav-link">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a href="#skill" className="nav-link">SKILL</a>
                        </li>
                        <li className="nav-item">
                            <a href="#project" className="nav-link">PROJECT</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">CONTACT</a>
                        </li>
                    </ul>
                </div>

            </div>

        </>
    )
}

export default Navbar
