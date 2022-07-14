import React from 'react'
import './Home.css'
import Product from './Product'
import Banner from './Banner';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
          <div className='home__image'><Banner /></div>
           
            <div className='home__row'>
            
                <Product title="The book that started the phenomenon Sarah J. Maas's #1 global bestselling THRONE OF GLASS series has taken the world by storm.Meet Celaena Sardothien.Beautiful. Deadly. Destined for greatness"
                    id="12321341"
                    price={29.9}
                    image='https://m.media-amazon.com/images/I/51ZstaXosNL.jpg'
                    rating={5}
                    rem={0}
                />
                <Product
                    id="49538094"
                    title="boAt Rockerz 550 Upto 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation Bluetooth Wireless Over Ear Headphones "
                    price={239.0}
                    rating={4}
                    rem={1}
                    image="https://m.media-amazon.com/images/I/41FawD+A1CL._SY300_SX300_.jpg" 
                />
                
            </div>

            <div className='home__row'>
            <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            rem={2}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            rem={0}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={2}
            rem={0}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
            </div>

            <div className='home__row'>
                <Product
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
            </div>
        </div>
    </div>
  )
}

export default Home