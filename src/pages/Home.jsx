import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar";
import Scene from "../Components/Scene";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row min-vh-100">

                    {/* Left Column */}
                    <div className="col-12 col-lg-6 d-flex flex-column justify-content-center p-5 text-center text-lg-start">
                        <p className="fs-2">Hi,</p>
                        <h1 className="display-1">Roshan — This Side</h1>
                        <h2 className="fs-1 text">MERN Stack Developer</h2>
                        <p className="fs-4 text">
                            Crafting responsive, user-focused web apps with a blend of logic and creativity.
                        </p>
                        <div className="col-12">
                            <a href="#contact" className="button me-2" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", fontSize: "20px" }}>
                                Let's Work Together
                            </a>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-12 col-lg-6 p-0">
                        <img
                            src="https://i.pinimg.com/originals/50/ea/6f/50ea6f333adf5baf1b1984d3d90420a5.gif"
                            alt="3d object"
                            className="w-100 h-100"
                            style={{ objectFit: "contain", minHeight: "50vh" }}
                        />
                    </div>

                </div>
            </div>

        </>
    );
};

export default Home;
