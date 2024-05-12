import React from 'react'
import landing from '../assets/images/2.jpg'
import "../Css/slider.css"
export default function MySlider() {
    return (
        <div className='sliderContainer'>
            <img src={landing} alt="" />
        </div>
    )
}
