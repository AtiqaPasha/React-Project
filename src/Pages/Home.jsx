import '../App.css'
import AppBar from '../Components/AppBar'
import axios from 'axios'
import React from 'react'
import Loader from '../Components/Loader'
// import { useEffect } from 'react'
import  {  useEffect, useState } from 'react'

import FooterSection from '../Components/FooterSection'
import CategorySection from '../Components/CategorySection'
import NewArrivals from '../Components/NewArrivals'
import SpecialOffer from '../Components/SpecialOffer'
import Counter from '../Components/Counter'
import Sale from '../Components/Sale'
import AppBar2 from '../Components/AppBar2'
import Slider from '../Components/Slider'
import NavigationBar from '../Components/NavigationBar'

function Home() {

  const [loader, setLoader] = useState(true)



  
  useEffect(() => {
    
        setLoader(false)
  
}, [])
  return (
    <>

    {
       loader
       ?
       <Loader />
       :


       <div className="container-fluid mx-0 px-0" style={{backgroundColor:'#eabfff', overflowX: 'hidden'}}>
       {/* <AppBar/>

 <AppBar2/> */}
       <NavigationBar />
       <Slider />

       <NewArrivals />

       <Sale />

       <SpecialOffer />

       <CategorySection />

       <Counter />

       <FooterSection />
     </div>
    }
     
    </>
  )
}

export default Home
