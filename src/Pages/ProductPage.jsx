import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import ReactStars from 'react-stars'
import Swal from 'sweetalert2'
import Carousel from 'react-bootstrap/Carousel'
import '/src/css/productpage.css'
// import AppBar2 from '../Components/AppBar2'
// import AppBar from '../Components/AppBar'
import NavigationBar from '../Components/NavigationBar'
import FooterSection from '../Components/FooterSection'
// import { motion } from 'framer-motion'
import { BsFillCartPlusFill } from 'react-icons/bs'

export default function ProductPage() {
  const { productID } = useParams()
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [review, setReview] = useState('')

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productID}`)
      .then((json) => setProduct(json.data))
  }, [])

  const submitReview = () => {
    console.log(review)
    Swal.fire({
      title: 'Review Submiited!',
      text: 'Thanks for your Review',
      icon: 'success',
      confirmButtonText: 'Continue',
    })
  }
  const experience = () => {
    Swal.fire({
      title: 'How was your experience shopping with us?',
      icon: 'question',
      input: 'range',
      inputLabel: 'Rate Your Experience',
      inputAttributes: {
        min: 8,
        max: 120,
        step: 1,
      },
      inputValue: 25,
    })
  }
  const addtoCart = () => {
    console.log(review)
    Swal.fire({
      title: 'Item has been added to Cart!',
      text: 'Thankyou for shopping',
      icon: 'success',
      confirmButtonText: 'Continue',
    })

    const payload = {
      ...product,
      quantity: quantity,
      productTotal: product.price * quantity,
    }

    console.log(payload)
  }

  return (
    <>
   

   <NavigationBar/>

      <div className="con">
        <h1 className="text-center py-5">ProductName: {product.title}</h1>
        <div className="cont">
          <div className="cont1">
            {' '}
            <Carousel className="caro">
              {product?.images?.map((img, key) => (
                <Carousel.Item key={key}>
                  <img
                    className="images element d-block img-fluid"
                    src={img}
                    alt="First slide"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="cont2">
            <h1 className="">
              Price:{product.title} - {product.price}$
            </h1>
            <h3>
              Details{' '}
              <span className=" text-center">
                {product.description}
              </span>
            </h3>
            <div className="align-items-center">
              <h1>
                <span className="ms-3 fw-bold">Rating- {product.rating}</span>
              </h1>{' '}
              <div className="stars">
                <ReactStars
                  value={product.rating}
                  edit={false}
                  count={5}
                  size={24}
                  color2={'#ffd700'}
                />
              </div>
            </div>
            <div className="add">
              <div className="cart mt-3">
                {quantity > 1 ? (
                  <button
                    className="btn mx-2 "
                    onClick={() => setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                ) : (
                  <button
                    disabled
                    className="btn  mx-2"
                    onClick={() => setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                )}

                <span className="mx-4">{quantity}</span>
                <button
                  className="btn mx-2"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>

                <div className="mt-4">
                  <button className="btn mx-3" onClick={addtoCart}>
                    <BsFillCartPlusFill /> Add to Cart
                  </button>
                </div>
                <div className="container py-5">
                  <h5 className="">Review us:</h5>
                  <div className="form-floating mt-3">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: 100 }}
                      defaultValue={review}
                      onChange={(e) => setReview(e.target.value)}
                    />
                    <label htmlFor="floatingTextarea2">Comments</label>
                  </div>

                  <button className="btn mt-2" onClick={submitReview}>
                    Submit
                  </button>
                  <button className="btn mt-2 mx-2" onClick={experience}>
                    Experience
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  )
}
