import React from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  useContext, useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../Components/NavigationBar';
import FooterSection from '../Components/FooterSection';
import '/src/css/productpage.css'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import {CartContext} from '../context/addtoCart/context'



export default function CategoryPage() {

  const {categoryName} = useParams()
  const [products, setProducts] = useState([])
  const {state,dispatch} = useContext(CartContext)


useEffect(() => {
axios.get(`https://dummyjson.com/products/category/${categoryName}`)
.then(json => setProducts(json.data.products))

},[categoryName])



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

<NavigationBar />


   <div className="container-fluid  mt-0 pt-1 animation" data-aos="fade-up" style={{backgroundColor:'#eabfff',color:'#300047'}} >
    <div className="my-5 text-center">
      <h1 >{categoryName.toUpperCase()}</h1>

      <hr className='m-auto w-25 h-35 mb-2'  />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, atque. Hic ipsa dolores natus odio cumque dignissimos aspernatur neque corrupti nemo sapiente, cupiditate itaque vero distinctio voluptatibus. Impedit rerum possimus sunt asperiores consequuntur ut nam. Perferendis non est debitis sequi repellendus maiores minima vitae alias veritatis accusamus dicta, mollitia similique eius! Deleniti eveniet impedit eligendi eius, error perferendis tempore doloribus!</p>
    </div>

    <div className="row mx-5" style={{backgroundColor:'#eabfff'}} >
      {

products.map((val, key) =>

<div className="col-md-4 " style={{backgroundColor:'#eabfff'}} key={key}>
      <Link className='text-decoration-none' to={`/products/${val.id}`}>
      
      <Card className="animation my-3 " data-aos="flip-left"style={{backgroundColor:'#d580ff'}}>
      <Card.Img style={{ height: '350px'}} variant="top" src={val.thumbnail} />
      <Card.Body>
        <Card.Title>{val.title} - {val.price}$</Card.Title>
        <Card.Text>
         {/* {val.description} */}
         {val.description.length > 20 ? val.description.slice(0, 20) + '...' : val.description}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        <div className="d-grid">
              <button className="btn btn-outline-dark" type="button" onClick={() => addtoCart(product)}>
                Add to Cart
              </button>
            </div>
      </Card.Body>
    </Card>
      </Link>
      </div>
)
      }

    </div>
   </div>

   <FooterSection/>

</>


  )
}
