import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function AppBar() {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 3000,
    })
  }, [])
  return (
    <>
      {/* <Navbar>
     <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

      <Navbar expand="lg" className="bg-dark text-white">
        <Container>
          <Navbar.Brand
            href="#home"
            className="text-white animation"
            data-aos="fade-right"
          >
            {' '}
            <img
              src="/src/Pages/mainlogo.PNG"
              width="50%"
              style={{ objectFit: 'contain' }}
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          {/* <Navbar.Brand href="#home" className='text-white animation' data-aos="fade-right" > <img
              src="/src/Pages/logo3.PNG"
              width="40"
              height="40"
             
              className="d-inline-block align-top "
              // alt="React Bootstrap logo"
            />AL SMART STORE 
</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto animation" data-aos="fade-left">
              <Nav.Link>
                <Link className="ms-4 btn btn-primary" to="/login">
                  Login
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className=" btn btn-primary" to="/signup">
                  Sign Up
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default AppBar
