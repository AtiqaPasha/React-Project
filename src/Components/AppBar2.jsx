import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function AppBar2() {

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 3000
    });

  },[])
  return (
    <>
   


{/* 
    <Navbar expand="lg" className="w-100 bg-primary animation " data-aos="fade-down" >
      <Container className="  bg-primary animation" >
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="  bg-primary "  />
        <Navbar.Collapse id="basic-navbar-nav" className="  bg-primary ">
          <Nav className=" mx-auto bg-primary " >
            <Nav.Link ><Link className="  bg-primary text-white text-decoration-none " to="/" >Home</Link></Nav.Link>
            <Nav.Link ><Link className="  bg-primary text-white text-decoration-none " to="/products" >Products</Link></Nav.Link>
            <Nav.Link ><Link className="  bg-primary text-white text-decoration-none" to="#offers" >New Arrivals</Link></Nav.Link>
            <Nav.Link ><Link className="  bg-primary text-white text-decoration-none" to="/products">Eid Dhamaka Sale</Link></Nav.Link>
            <Nav.Link ><Link className="  bg-primary text-white text-decoration-none" to="/products" >Special Offers</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}


    </>
  )
}

export default AppBar2
