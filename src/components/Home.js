import React from 'react'
import Carousel from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"


export default function Home(){


return(
<div className='Home'>
    <div className='background-image'></div>
    <div className='carousel-container'>
        <Carousel />
    </div>
    This is the Home Page!
</div>
)}