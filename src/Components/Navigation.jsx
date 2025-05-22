import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navigation.css"
import { FaRegMoon } from "react-icons/fa";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from 'react';
import { IoIosSunny } from 'react-icons/io';

const Navigation = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Navbar expand="lg" className="bg-body-dark nav fixed-top" style={{
        top: 0,
        position: "sticky",
        width: "100%",
        zIndex: 1050,
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.16)",

        border: "1px solid rgba(255, 255, 255, 0.18)",
        padding: "15px 0",
        backgroundColor: theme ? "#36454F" : "white",
        color: theme ? "black" : "white",
      }}>
        <Container>
          <Navbar.Brand href="#navigation" id='navigation' className='fw-bold' style={{color: theme ? "white" : "black"}}>RP PORTFOLIO</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbar"
            style={{
              border: "none",
            }}
          >
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 d-flex justify-content-center">
              <Nav.Link className='fw-bold nav-links' href="#home" style={{color: theme ? "white" : "black"}}>HOME</Nav.Link>
              <Nav.Link className='fw-bold nav-links' href="#about" style={{color: theme ? "white" : "black"}}>ABOUT</Nav.Link>
              <Nav.Link className='fw-bold nav-links' href="#skills" style={{color: theme ? "white" : "black"}}>SKILLS</Nav.Link>
              <Nav.Link className='fw-bold nav-links' href="#project" style={{color: theme ? "white" : "black"}}>PROJECT</Nav.Link>
              <Nav.Link className='fw-bold nav-links' href="#contact" style={{color: theme ? "white" : "black"}}>CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="theme-toggle d-none d-sm-none d-md-block d-lg-block">
            {theme ? (
              <IoIosSunny
                size={25}
                onClick={toggleTheme}
                style={{ color: theme ? "white" : "black" }}
              />
            ) : (
              <FaRegMoon
                size={20}
                onClick={toggleTheme}
                style={{ color: theme ? "white" : "black" }}
              />
            )}
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation