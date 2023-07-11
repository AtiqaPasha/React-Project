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
import { useContext } from 'react'
import { UserContext } from '../context/login/context'
function NavigationBar() {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 3000,
    })
  }, [])

  const { state, dispatch } = useContext(UserContext)

  return (
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      style={{ backgroundColor: '#300047', color: 'white' }}
    >
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}

        <Navbar.Brand href="#home" className="animation" data-aos="fade-right">
          {' '}
          AL SMART STORE <FaShoppingCart style={{ fontSize: '30px' }} />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" data-aos="fade-up">
            <Link
              className="  text-white text-decoration-none nav-link "
              to="/"
            >
              Home
            </Link>

            <Link
              className="  text-white text-decoration-none nav-link "
              to="/products/category/womens-jewellery"
            >
              New Arrivals
            </Link>

            <Link
              className="  text-white text-decoration-none nav-link "
              to="/products/category/womens-dresses"
            >
              Eid Dhamaka Sale
            </Link>

            <Link
              className="   text-white text-decoration-none nav-link "
              style={{ marginRight: '50px' }}
              to="/products"
            >
              Products
            </Link>
          </Nav>

          <div className=" d-flex align-items-center">
            {' '}
            <FaUserCircle size={25} /> <span className="ms-2">{state.User?.email}</span>
          </div>

          {state.User ? (
            <>
              <button
                className=" btn  mx-2"
                style={{ backgroundColor: '#eabfff', color: '#300047' }}

                onClick={()=>{
                  dispatch({
                    type:'LOGOUT'
                  })
                }}
              >
                LogOut
              </button>
            </>
          ) : (
            <>
              <Cart />

              <Link
                className=" btn  mx-2"
                to="/login"
                style={{ backgroundColor: '#eabfff', color: '#300047' }}
              >
                Login
              </Link>

              <Link
                className=" btn mx-2"
                to="/signup"
                style={{ backgroundColor: '#eabfff', color: '#300047' }}
              >
                Sign Up
              </Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
