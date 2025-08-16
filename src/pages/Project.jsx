import React from "react";
import "./Project.css";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Project = () => {
    return (
        <div className="container-fluid project bg-black text-white py-5">
            <div className="container-fluid">
                <h1 className="display-1 mb-3 text-center">Project Gallery</h1>
                <p className="text-light text-center mb-5">
                    A showcase of my work, where ideas transform into functional and impactful digital solutions.
                </p>

                {/* Freelance Projects */}
                <h3 className="fw-bold text-uppercase mb-4">💻 Freelance Projects</h3>
                <div className="row g-4">
                    {/* Project 1 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="project-card rounded shadow-sm h-100 overflow-hidden">
                            <div className="card-img-wrapper">
                                <img
                                    src="/Logo lab technology.png"
                                    alt="Logo lab Technology"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="card-body p-3 d-flex flex-column">
                                <h5 className="fs-3 mb-2" style={{ fontFamily: "inherit" }}>Logo Lab Technology</h5>
                                <p className="card-info flex-grow-1">
                                    Worked for a startup company providing logos, banners, and more.
                                </p>
                                <p><strong>Tech Stack:</strong> HTML, CSS, Bootstrap, Three.js</p>
                                <div className="d-flex gap-2 mt-3">
                                    <a
                                        href="https://logolabtechnology.netlify.app/"
                                        target="_blank"
                                        className="btn btn-light btn-cta flex-grow-1 d-flex align-items-center justify-content-center"
                                    >
                                        <FiExternalLink size={20} /> <span>View Site</span>
                                    </a>
                                    <a
                                        href="https://github.com/roshan773/logolabtechnology"
                                        target="_blank"
                                        className="btn btn-outline-light btn-cta flex-grow-1 d-flex align-items-center justify-content-center"
                                    >
                                        <FiGithub size={20} /><span>View Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="project-card rounded shadow-sm h-100 overflow-hidden">
                            <div className="card-img-wrapper">
                                <img
                                    src="/wedgram designs.png"
                                    alt="Wedgram designs"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="card-body p-3 d-flex flex-column">
                                <h5 className="fs-3 mb-2" style={{ fontFamily: "inherit" }}>Wedgram Designs</h5>
                                <p className="card-info flex-grow-1">
                                    Developed my first responsive website using HTML, CSS, and Bootstrap as a foundation project.
                                </p>
                                <p><strong>Tech Stack:</strong> HTML, CSS, Bootstrap</p>
                                <div className="d-flex gap-2 mt-3">
                                    <a
                                        href="https://wedgramdesigns.vercel.app/"
                                        target="_blank"
                                        className="btn btn-light btn-cta flex-grow-1 d-flex align-items-center justify-content-center"
                                    >
                                        <FiExternalLink size={20} /> <span>View Site</span>
                                    </a>
                                    <a
                                        href="https://github.com/roshan773/Wedgramdesigns"
                                        target="_blank"
                                        className="btn btn-outline-light btn-cta flex-grow-1 d-flex align-items-center justify-content-center"
                                    >
                                        <FiGithub size={20} /><span>View Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="project-card rounded shadow-sm h-100 overflow-hidden">
                            <div className="card-img-wrapper">
                                <img
                                    src="/Personal portfolio.png"
                                    alt="Graphic Designer Website"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="card-body p-3 d-flex flex-column">
                                <h5 className="fs-3 mb-2" style={{ fontFamily: "inherit" }}>Graphic Designer Website</h5>
                                <p className="card-info flex-grow-1">
                                    Built a creative website for a graphic designer using modern interactive elements.
                                </p>
                                <p><strong>Tech Stack:</strong> HTML, CSS, Bootstrap, Three.js</p>
                                <div className="d-flex gap-2 mt-3">
                                    <a
                                        href="https://raghupatilportfolio.netlify.app/"
                                        target="_blank"
                                        className="btn btn-light btn-cta flex-grow-1 d-flex align-items-center justify-content-center"
                                    >
                                        <FiExternalLink size={20} /> <span>View Site</span>
                                    </a>
                                    <a
                                        href="https://github.com/roshan773/GraphicDesignerProject"
                                        target="_blank"
                                        className="btn btn-outline-light btn-cta flex-grow-1 d-flex align-items-center justify-content-center"
                                    >
                                        <FiGithub size={20} /><span>View Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Clone Projects */}
                <h3 className="fw-bold text-uppercase my-5">🔁 Clone Projects</h3>
                <div className="row g-4">
                    <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
                        {/* card1 */}
                        <div className="project-card bg-transparent">
                            <img src="/Book my show.png" alt="Book My Show Clone" className="card-img-top img-fluid" />
                            <div className="card-body pt-2">
                                <h5 className="fs-4 text-uppercase fw-bold">Book My Show Clone</h5>
                                <p className="card-info">Recreated the popular ticket booking platform.</p>
                                <p><strong>Tech Stack:</strong> Html, css, Bootstrap, jquery</p>
                                <div className="btn-group w-100 mt-3">
                                    <a
                                        href="https://bookmyshowproject.netlify.app/"
                                        target="_blank"
                                        className="btn btn-light btn-cta flex-grow-1 d-flex align-items-center justify-content-center me-2"
                                    >
                                        <FiExternalLink size={20} /> <span>View Site</span>
                                    </a>
                                    <a
                                        href="https://github.com/roshan773/book-my-show"
                                        target="_blank"
                                        className="btn btn-outline-light btn-cta flex-grow-1 d-flex align-items-center justify-content-center me-2"
                                    >
                                        <FiGithub size={20} /><span>View Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
                        {/* card2 */}
                        <div className='project-card bg-transparent'>
                            <img src="/Group project.png" alt="Hillcrest website clone" className='card-img-top img-fluid' />
                            <div className='card-body pt-2'>
                                <h5 className='fs-4 text-uppercase fw-bold'>hillcrest Website clone</h5>
                                <p className='card-info'>Recreated the website of the resort.</p>
                                <p><strong>Tech Stack:</strong> Html, css, Bootstrap, jquery</p>
                                <div className="btn-group w-100 mt-3">
                                    <a
                                        href="https://hillcrestproject.netlify.app/"
                                        target="_blank"
                                        className="btn btn-light btn-cta flex-grow-1 d-flex align-items-center justify-content-center me-2"
                                    >
                                        <FiExternalLink size={20} /> <span>View Site</span>
                                    </a>
                                    <a
                                        href="https://github.com/roshan773/Hillcrest"
                                        target="_blank"
                                        className="btn btn-outline-light btn-cta flex-grow-1 d-flex align-items-center justify-content-center me-2"
                                    >
                                        <FiGithub size={20} /><span>View Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
                        {/* card3 */}
                        <div className='project-card bg-transparent'>
                            <img src="/Dashboard.png" alt="" className='img-fluid img-top' />
                            <div className='card-body pt-2'>
                                <h5 className='fs-4 text-uppercase fw-bold'>Dashboard Website</h5>
                                <p className='card-info'>Recreated a  Website of the bank dashboard</p>
                                <p><strong>Tech Stack: </strong>Html, css, Bootstrap, Chart.js</p>
                                <div className="btn-group w-100 mt-3">
                                    <a
                                        href="https://bankdashproject.netlify.app/"
                                        target="_blank"
                                        className="btn btn-light btn-cta flex-grow-1 d-flex align-items-center justify-content-center me-2"
                                    >
                                        <FiExternalLink size={20} /> <span>View Site</span>
                                    </a>
                                    <a
                                        href="https://github.com/roshan773/adminpanel"
                                        target="_blank"
                                        className="btn btn-outline-light btn-cta flex-grow-1 d-flex align-items-center justify-content-center me-2"
                                    >
                                        <FiGithub size={20} /><span>View Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
                        {/* card4 */}
                        <div className='project-card bg-transparent'>
                            <img src="/Rest api.png" alt="" className='img-fluid img-top' />
                            <div className='card-body pt-2'>
                                <h5 className='fs-4 text-uppercase fw-bold'>E-Commerce API Fetch Demo</h5>
                                <p className='card-info'>Dynamic Online Store with Real-Time API Fetching</p>
                                <p><strong>Tech Stack: </strong>Html, Bootstrap, Rest Api</p>
                                <div className="btn-group w-100 mt-3">
                                    <a
                                        href="https://fetchhive.netlify.app/"
                                        target="_blank"
                                        className="btn btn-light btn-cta flex-grow-1 d-flex align-items-center justify-content-center me-2"
                                    >
                                        <FiExternalLink size={20} /> <span>View Site</span>
                                    </a>
                                    <a
                                        href="https://github.com/roshan773/api-store"
                                        target="_blank"
                                        className="btn btn-outline-light btn-cta flex-grow-1 d-flex align-items-center justify-content-center me-2"
                                    >
                                        <FiGithub size={20} /><span>View Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
