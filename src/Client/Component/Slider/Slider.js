import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Slider.css"
import Slide1 from './Slide1';
const SliderComp = () => {
    return (
        <div className='bg-body'>
           <Slide1/>
           <h1>Hello</h1>
        </div>
    )
}

export default SliderComp
