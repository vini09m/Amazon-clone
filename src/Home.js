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
                    price={599.0}
                    image='https://m.media-amazon.com/images/I/51ZstaXosNL.jpg'
                    rating={5}
                    rem={0}
                />
                <Product
                    id="49538094"
                    title="boAt Rockerz 550 Upto 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation Bluetooth Wireless Over Ear Headphones "
                    price={1999.0}
                    rating={4}
                    rem={1}
                    image="https://m.media-amazon.com/images/I/41FawD+A1CL._SY300_SX300_.jpg" 
                />
                
            </div>

            <div className='home__row'>
            <Product
            id="4903850"
            title="OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={199.99}
            rating={3}
            rem={2}
            image="https://img.giznext.com/assets/model/9/1463/oppo-a8-1612596803.jpg"
          />
          <Product
            id="23445930"
            title="Titan Regalia Chronograph Silver Dial Men's Watch-NN9308BM01/NP9308BM01"
            price={98.99}
            rating={3}
            rem={0}
            image="https://cdn.shopify.com/s/files/1/0575/3602/0580/products/rolex-yacht-master-triple-red-titan-black-116622-replica-1_jpg_700x700.webp?v=1652703763"
          />
          <Product
                    id="90829332"
                    title="OnePlus 80 cm (32 inches) Y Series HD Ready Smart Android LED TV 32 Y1S (Black)"
                    price={1094.98}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/71vZypjNkPS._SL1500_.jpg"
                />
          
            </div>

            <div className='home__row'>
            <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={5}
            rem={0}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
            </div>
        </div>
    </div>
  )
}

export default Home