import React from 'react'
import {Carousel} from 'react-bootstrap'
import './Banner.css'


function Banner() {
  return (
    <div >
       <Carousel variant="none">
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://links.papareact.com/gi1"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://links.papareact.com/7ma"
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://links.papareact.com/6ff"
      alt="Third slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/TheLordofTheRings/Version-2/3000x1200_Hero-Tall._CB632692673_.jpg"
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel> 
    </div>
  )
}

export default Banner