import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa'
// import {FaShoppingCart } from 'react-icons/Fa'
import Cart from './Cart'
function NavigationBar() {

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 3000,
    })
  }, [])

  return (
    <Navbar expand="lg" data-bs-theme="dark" style={{backgroundColor:'#300047',color:"white"}}>
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}

        <Navbar.Brand
          href="#home"
          className="animation" data-aos="fade-right"
        > AL SMART STORE   <FaShoppingCart style={{fontSize: '30px'}}/> 
          {' '}
          <img
            // src="/src/Pages/mainlogo.PNG"
            // width="25%"
            // style={{ objectFit: 'contain' }}
            // className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" data-aos="fade-up">
          <Nav.Link ><Link className="  text-white text-decoration-none " to="/" >Home</Link></Nav.Link>
          <Nav.Link ><Link className="  text-white text-decoration-none " to="/products/category/womens-jewellery" >New Arrivals</Link></Nav.Link>
          <Nav.Link ><Link className="  text-white text-decoration-none " to="/products/category/womens-dresses" >Eid Dhamaka Sale</Link></Nav.Link>
            <Nav.Link ><Link className="   text-white text-decoration-none " style={{marginRight: '50px'}} to="/products" >Products</Link></Nav.Link>
            
            {/* <NavDropdown style={{backgroundColor:'#300047',color:'white'}} title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item style={{color:'white'}} href="#action/3.1">New Arrival</NavDropdown.Item>
              <NavDropdown.Item style={{color:'white'}} href="#action/3.2">
            Eid Dhamaka Sale
              </NavDropdown.Item>
              <NavDropdown.Item style={{color:'white'}} href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item style={{color:'white'}} href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
 
          <div className=' d-flex align-items-center'>   <FaUserCircle size={25} />  <span className='ms-2'></span></div>
         
         
         
         
       
                    <Cart />


         
          <Nav.Link data-aos="fade-left">
                <Link className=" btn  mx-2" to="/login" style={{backgroundColor:"#eabfff",color:"#300047"}}>
                  Login
                </Link>
              </Nav.Link>
              <Nav.Link data-aos="fade-left">
                <Link className=" btn mx-2" to="/signup" style={{backgroundColor:"#eabfff",color:"#300047"}}>
                  Sign Up
                </Link>
              </Nav.Link>

              

                   

        </Navbar.Collapse>

      

      </Container>
    </Navbar>



  )
}

export default NavigationBar
