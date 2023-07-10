import React from 'react'

// import AOS from 'aos';
// import 'aos/dist/aos.css'
// import { useEffect } from 'react';


export default function FooterSection() {

  // useEffect(() => {
  //   AOS.init({
  //     offset: 300,
  //     duration: 3000
  //   });

  // },[])
  return (
    <>
    {/* Hello world */}
    <div className="p-3 copyright " style={{backgroundColor:'#66023c'}} >
      <div className="container" >
        <div className="row align-items-center text-white" >
          <div className="col-12 col-lg-6 p-1 p-lg-3 text-center text-lg-start" >
          {/* <img
              src="/src/Pages/logo3.PNG"
              width="50"
              height="40"
             
              className="d-inline-block align-top "
              // alt="React Bootstrap logo"
            /> */}
            <p className="my-0 " >
              Copyright © 2023 <span className='fs-5'>AL SMART STORE </span>
               All Rights Reserved
            </p>
          </div>
          <div className="col-12 col-lg-6 p-1 p-lg-3 text-center text-lg-end " >
            <p  >
              Designed by
             
                ATIQA PASHA & LAIBA MOHAMMAD ALI
          
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}
