

import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button';
import '/src/css/products.css'
import AOS from 'aos';
import {CartContext} from '../context/addtoCart/context'
import 'aos/dist/aos.css'
// import AppBar2 from '../Components/AppBar2';
// import AppBar from '../Components/AppBar';
import FooterSection from '../Components/FooterSection';
import NavigationBar from '../Components/NavigationBar'
import Loader from '../Components/Loader'

export default function Products() {
  const [products, setProducts] = useState([])

  const {state,dispatch} = useContext(CartContext)

  const [loader, setLoader] = useState(true)


  useEffect(() => {
    axios.get('https://dummyjson.com/products').then(json => setProducts(json.data.products));
    setLoader(false)


  }, [])

  

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 3000
    });
  
  },[])


  const addtoCart = (item) => {
    // console.log(item)
    dispatch(
        {
            type : "ADD_TO_CART",
            payload : item
        }
    )
}


  return (
    <>


{
  loader
  ?
  <Loader />
  :

  <body className='bod'>
<NavigationBar />

    <div className="container-fluid product mt-0 pt-1 animation" data-aos="fade-up">
      <div className="my-5 text-center">
        <h1 >PRODUCTS</h1>
        <hr className='m-auto w-25 h-35  mb-2' style={{ color : 'white' }} />
        <img src="/src/img1.png" alt="" />
        <p className="text-center">The page displaying all products in the e-commerce store, often referred to as the "Product Listing" or "Shop" page, serves as a central hub where customers can browse and explore the range of products available for purchase. </p>
      </div>


      <div className="container">
        <div className="row">
        {/* // ... */}

{
  products.map((product, key) => (
    <div className="col-md-4 mb-3" key={key}>
      <Link to={`/products/${product.id}`} className="text-decoration-none">
        <Card className="car animation" data-aos="flip-left">
          <Card.Img style={{ height: '350px' }} variant="top" src={product.thumbnail} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.description.length > 20 ? product.description.slice(0, 20) + '...' : product.description}
            </Card.Text>
            <div className="d-grid">
              <button className="btn btn-outline-dark" type="button" onClick={() => addtoCart(product)}>
                Add to Cart
              </button>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  ))
}

{/* // ... */}

        </div>
      </div>
    </div>
    <FooterSection/>
    </body>
}

    </>
  )
}