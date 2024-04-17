import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <img className='home_image'
      src = "https://m.media-amazon.com/images/I/610Q56vDdSL._SX3000_.jpg"
      alt=''
      />

    {/* product id , title , prise , rating , image */}
    <div className="home_row">
        <Product
          id={12}
          title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting"
          price={179.00}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg"
        />
        <Product
          id={34}
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={21.92}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id={56}
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={249}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        />
        <Product
          id={78}
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={349.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id={90}
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={240.00}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91B%2BxrXdD%2BL._AC_SL1500_.jpg"
          />
      </div>
    </div>
  )
}

export default Home