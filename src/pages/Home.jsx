import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar";
import Three from "../Components/Three";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid position-relative min-vh-100">
                <div className="row min-vh-100 position-relative">
                    
                    {/* Left Column (Foreground Content) */}
                    <div
                        className="col-12 col-lg-5 d-flex flex-column justify-content-center p-5 text-center text-lg-start"
                        style={{ zIndex: 2 }} // keep text always on top
                    >
                        <p className="fs-2">Hey,</p>
                        <h1 className="display-1">Roshan — This Side</h1>
                        <h2 className="fs-1 text">MERN Stack Developer</h2>
                        <p className="fs-4 text">
                            Crafting responsive, user-focused web apps with a blend of logic and creativity.
                        </p>
                        <div className="col-12">
                            <a
                                href="#contact"
                                className="button me-2"
                                style={{
                                    fontFamily:
                                        "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                                    fontSize: "20px",
                                }}
                            >
                                Let's Work Together
                            </a>
                        </div>
                    </div>

                    {/* Right Column with 3D Donut (Background) */}
                    <div
                        className="col-12 col-lg-7 position-absolute top-0 end-0 h-100"
                        style={{ zIndex: 1 }}
                    >
                        <Three />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
