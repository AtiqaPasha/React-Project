// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { EffectFade } from 'swiper';
// import { Link } from 'react-router-dom'
// import AOS from 'aos';
// import 'aos/dist/aos.css'
// import { useEffect } from 'react';



// export default function Slider() {


//   useEffect(() => {
//     AOS.init({
//       offset: 300,
//       duration: 3000
//     });

//   },[])

//   return (
//     <Swiper style={{ backgroundColor: 'none'}}
//     modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
//       spaceBetween={0}
//       effect="fade"
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true  }}
//       scrollbar={{ draggable: true }}
//     // onSlideChange={() => console.log('slide change')}
//     // onSwiper={(swiper) => console.log(swiper)}
//   >
//     <SwiperSlide >
    
//     <div className="home-banner-text animation" data-aos="fade-up" style={{position: 'relative', top: '150px',  zIndex: '99'}}>
//     {/* <h1 className='text-dark mx-4' style={{ fontSize : '50px' }}  >AL SMART STORE</h1> */}
//     {/* <h2 className='text-dark mx-4' style={{ fontSize : '50px' }}>Shop smarter – shop online!</h2> */}


//     {/* <Link  className="btn btn-primary  text-uppercase mt-4 "to='/products' style={{position: 'absolute', left: '300px', fontSize : '30px',border :'2px solid white'  }}>
//      Shop Now
     
//     </Link> */}

//     {/* <Link to={'/products'}>Hello</Link> */}

//     {/* <button>Change</button>S */}


//      {/* <h2 className='w-25 bg-primary m-auto text-center' style={{ fontSize : '30px',border :'2px solid white' }}>Shop Now</h2> */}
//   </div>

//   <img src="/src/Pages/home5.PNG" alt="" style={{ width:'100%' , height: '80vh ',position: 'absolute', top: '0px' }} />
        
      
//     {/* <div className="container"><img src="https://phonebazar.pk/wp-content/uploads/2022/01/Buy-Vivo-Y15s-online-540x540.jpg" alt="" /></div> */}
//     </SwiperSlide>
//     <SwiperSlide><img src="https://www.neelnetworks.com/blog/wp-content/uploads/2016/06/what-is-ecommerce-website-and-its-types-1024x536.jpg"  style={{ width:'100%' , height: '80vh ',position: 'absolute', top: '0px' }} /></SwiperSlide>
//     <SwiperSlide><img src="/src/Pages/home3.png" alt="" style={{ width:'100%', height: '80vh '}}/></SwiperSlide>
//     <SwiperSlide><img src="/src/Pages/home6.png" alt="" style={{ width:'100%', height: '80vh '}}/></SwiperSlide>
//     {/* <SwiperSlide>Slide 4</SwiperSlide> */}
    
//   </Swiper>
//   )
// }



import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Slider() {
  return (
 
   <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="/src/Pages/home5.PNG"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="/src/Pages/home3.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/src/Pages/home6.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
