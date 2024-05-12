import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const items = [
    
    "/img/slider2.webp ",
    "/img/slider3.webp ",
    "/img/slider4.webp "
].map((x)=><img src={x} alt=''className='w-80'/> )

const Carasol = () => {
  return (
    <AliceCarousel
    autoPlay
    autoPlayControls
    autoPlayStrategy="none"
    autoPlayInterval={1000}
    animationDuration={1000}
    animationType="fadeout"
    infinite
    touchTracking={false}
    disableDotsControls
    disableButtonsControls
    items={items}
/>
  )
 
}

export default Carasol