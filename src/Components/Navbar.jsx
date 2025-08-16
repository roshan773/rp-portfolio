import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <div className='d-none d-sm-none d-md-none d-lg-block'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container justify-content-center">
                        <ul className="navbar-nav d-flex align-items-center nav">

                            {/* Left links */}
                            <li className="nav-item px-2"><a href="#home" className="nav-link">HOME</a></li>
                            <li className="nav-item px-2"><a href="#about" className="nav-link">ABOUT</a></li>
                            <li className="nav-item px-2"><a href="#skill" className="nav-link">SKILL</a></li>

                            {/* Logo in the middle */}
                            <a className="navbar-brand" href="/">
                                <img src="/public/LOGO.png" alt="Logo" className="img-fluid" style={{ height: "80px", textAlign: "center" }} />
                            </a>

                            {/* Right links */}
                            <li className="nav-item px-2"><a href="#project" className="nav-link">PROJECT</a></li>
                            <li className="nav-item px-2"><a href="#contact" className="nav-link">CONTACT</a></li>

                            {/* Resume button */}
                            <a href="/Website developer Resume.pdf" target="_blank" rel="noopener noreferrer" className="button" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", fontSize: "20px" }}>
                                RESUME
                            </a>

                        </ul>
                    </div>
                </nav>
            </div>

            {/* for smaller screen */}
            <div className='d-block d-sm-block d-md-block d-lg-none' style={{ backgroundColor: "black" }}>
                <nav style={{ display: "flex", justifyContent: "space-between" }}>
                    <a className="navbar-brand" href="/">
                        <img src="/Logo.png" alt="Logo" className="img-fluid" style={{ height: "80px", textAlign: "center" }} />
                    </a>
                    <div>

                    </div>
                    <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Hide this modal and show the first with the button below.
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar