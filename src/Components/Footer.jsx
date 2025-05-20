import React from 'react';
import './Footer.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer container-fluid py-4" style={{ backgroundColor: '#f0f0f0' }}>
      <div className="container">
        <div className="row align-items-center text-center text-md-start">

          {/* Logo */}
          <div className="col-12 col-md-3 mb-3 mb-md-0">
            <img src="./LOGO.png" alt="Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
          </div>

          {/* Navigation */}
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <ul className="list-inline mb-0 d-flex flex-wrap justify-content-center gap-3">
              {['HOME', 'ABOUT', 'SKILL', 'PROJECT', 'CONTACT'].map((item, index) => (
                <li key={index} className="list-inline-item">
                  <a href={`#${item.toLowerCase()}`} className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-end gap-3">
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

        {/* Copyright */}
        <div className="border-top text-center pt-3 mt-4">
          <p className="mb-0 text-dark">&copy; {new Date().getFullYear()} Pakhre Roshan. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
