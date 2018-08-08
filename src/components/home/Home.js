import React from 'react';
import Slider from 'react-slick';
import './Home.css';

function Home() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 10000,
    arrows: false
  };

  return (
    <div className="home">

      <Slider {...settings}>
        <div className="home-cover-1">
          <div className="home-cover-text">
            <p className="home-cover-title">We Have Top Brands</p>
            <p>Purchase keyboards from our wide array of the best brands including Apple, Logitech, Corsair, and more!</p>
          </div>
        </div>
        <div className="home-cover-2">
          <div className="home-cover-text">
            <p className="home-cover-title">Unbeatable Prices</p>
            <p>Our keyboards are high quality with the lowest cost, ensuring everyone gets a bang for their buck!</p>
          </div>
        </div>
        <div className="home-cover-3">
          <div className="home-cover-text">
            <p className="home-cover-title">Newest Technology</p>
            <p>Our keyboards are the result of cutting edge research and creation!</p>
          </div>
        </div>
      </Slider>

      <div className="featured">
        <p className="featured-title">Featured</p>
        <Slider {...settings}>
          <div className="featured-products">
            <div className="featured-product-info">
              <div className="featured-product-img">
                <img src="https://img2.owcnow.com/imgs/ndesc/Apple/APLMC184LLAx/GradeA/Excellent_hero.jpg" width="300" alt="" />
              </div>
              <p className="featured-info">Apple Keyboards</p>
            </div>
            <div className="featured-product-info">
              <div className="featured-product-img">
                <img src="https://images-na.ssl-images-amazon.com/images/I/81w4WENhwYL._SL1500_.jpg" width="300" alt="" />
              </div>
              <p className="featured-info">Gaming Keyboards</p>
            </div>
            <div className="featured-product-info">
              <div className="featured-product-img">
                <img src="https://images-na.ssl-images-amazon.com/images/I/71FX6zzMvkL._SL1500_.jpg" width="300" alt="" />
              </div>
              <p className="featured-info">Wireless Keyboards</p>
            </div>
          </div>
          <div className="featured-products">
            <div className="featured-product-info">
              <div className="featured-product-img">
                <img src="https://images-na.ssl-images-amazon.com/images/I/81d5RHlqJQL._SL1500_.jpg" width="300" alt="" />
              </div>
              <p className="featured-info">Corsair Keyboards</p>
            </div>
            <div className="featured-product-info">
              <div className="featured-product-img">
                <img src="https://images-na.ssl-images-amazon.com/images/I/61tiBTdU2qL._SL1500_.jpg" width="300" alt="" />
              </div>
              <p className="featured-info">Refurbished Keyboards</p>
            </div>
            <div className="featured-product-info">
              <div className="featured-product-img">
                <img src="https://images-na.ssl-images-amazon.com/images/I/71t-MZrdWwL._SL1500_.jpg" width="300" alt="" />
              </div>
              <p className="featured-info">Keyboards Under $25</p>
            </div>
          </div>
        </Slider>

      </div>

    </div>
  );
}

export default Home;
