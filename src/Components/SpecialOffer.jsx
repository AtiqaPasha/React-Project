
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


export default function SpecialOffer() {

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 3000
    });

  },[])
    
  return (
    
   <div className="container animation" id='offers'  data-aos="fade-up">
      <div className="my-5 text-center">
        <h1>Special Offers</h1>
        <hr className='m-auto w-25 h-35 text-white mb-2' style={{ color : '#300047' }} />
        <p  style={{ color : '#660066' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos perferendis ipsum neque id culpa.</p>
      </div>
    

      <Link className='text-decoration-none animation' to='/products' data-aos="zoom-in-up" >

 <img className="img-fluid w-100 animation " style={{ height :'200px'}}
         src="https://t3.ftcdn.net/jpg/01/21/85/42/360_F_121854204_KW4GVjxCj0RecPZgFPNEhsLSZ9J9LfVW.jpg"
         data-aos="zoom-in-up"
          
        />
         <h2  style={{ position: 'relative',  top: '-100px', left: '350px'}}>UP TO 75% OFF SUMMERSALE!</h2>
     
     </Link> 

     

   
      </div>
  )
}
