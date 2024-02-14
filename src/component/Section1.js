import React from 'react'
import heroimg from "../assets/services-homepage.png";
import "./css/section1.css";

const Section1 = () => {
  return (
   <>
    <div className='herosection'>
     <div className="left"><img src={heroimg} alt="" /></div>
     <div className="right"><h1>Accelerate Your Business</h1></div>
    </div>
   </>
  )
}

export default Section1
