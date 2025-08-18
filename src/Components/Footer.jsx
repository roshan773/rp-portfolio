import React from 'react';
import './Footer.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer container-fluid py-5">
      <div className="container">
        <div className="row text-center text-md-start align-items-center">

          {/* Left - Logo & Tagline */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <img
              src="/Logo.png"
              alt="Logo"
              className="footer-logo mb-3"
            />
            <p className="footer-tagline">
              Building modern & interactive websites with passion and precision.
            </p>
          </div>

          {/* Middle - Quick Links */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="footer-heading fs-3">Quick Links</h5>
            <ul className="footer-links list-unstyled">
              {['Home', 'About', 'Skill', 'Project', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a href={`#${item.toLowerCase()}`} className="footer-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Socials */}
          <div className="col-12 col-md-4 text-center text-md-end">
            <h5 className="footer-heading fs-3">Connect</h5>
            <div className="footer-socials d-flex justify-content-center justify-content-md-end gap-3 mt-2">
              <a href="https://www.instagram.com/roshan__xi/?hl=en" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} className="social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} className="social-icon" />
              </a>
              <a href="https://github.com/roshan773" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} className="social-icon" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom - Copyright */}
        <div className="footer-bottom text-center pt-4 mt-4 border-top">
          <p className="mb-0">
            © {new Date().getFullYear()} <span className="fw-bold fs-4">Pakhre Roshan</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
