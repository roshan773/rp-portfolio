import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { IoMoon, IoSunnySharp } from 'react-icons/io5';
// import { FaBars, FaRegMoon, FaRegSun, FaTimes } from 'react-icons/fa';
import "./Navigation.css"

const Navigation = () => {

  return (
    <>
      <Navbar expand="lg" className="bg-body-dark nav top-fixed" style={{
        top: 0,
        width: "100%",
        zIndex: 1050,
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.16)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        padding: "15px 0",
      }}>
        <Container>
          <Navbar.Brand href="#navigation" id='navigation' className='fw-bold'>RP PORTFOLIO</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbar"
            style={{
              border: "none",
            }}
          >
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 d-flex justify-content-end">
              <Nav.Link className='fw-bold nav-links' href="#home">HOME</Nav.Link>
              <Nav.Link className='fw-bold nav-links' href="#about">ABOUT</Nav.Link>
              <Nav.Link className='fw-bold nav-links' href="#skills">SKILLS</Nav.Link>
              <Nav.Link className='fw-bold nav-links' href="#project">PROJECT</Nav.Link>
              <Nav.Link className='fw-bold nav-links' href="#contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation