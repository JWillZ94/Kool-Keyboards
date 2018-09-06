import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import '../keyboards/Keyboards.css';

function Home() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false
  };

  return (
    <div className="home">

      <Slider {...settings}>
        <div className="home-cover-1">
          <div className="home-cover-text">
            <p className="home-cover-title">We Have Top Brands</p>
            <p>Purchase keyboards from our wide array of the best brands including IBM, Ducky, BoxWave, and more!</p>
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
        <p className="featured-title section-title">Featured</p>
        <Slider {...settings}>
          <div className="featured-products">
            <div className="featured-product-info">
              <div className="featured-product-img image-container">
                <img src="https://images-na.ssl-images-amazon.com/images/I/61sXklbgkXL._SL1000_.jpg" className="image" alt="" />
              </div>
              <p className="featured-info">Filco Keyboards</p>
            </div>
            <div className="featured-product-info">
              <div className="featured-product-img image-container">
                <img src="https://images-na.ssl-images-amazon.com/images/I/41QpRJgjDhL.jpg" className="image" alt="" />
              </div>
              <p className="featured-info">Gaming Keyboards</p>
            </div>
            <div className="featured-product-info">
              <div className="featured-product-img image-container">
                <img src="https://images-na.ssl-images-amazon.com/images/I/41j-LikqSuL.jpg" className="image" alt="" />
              </div>
              <p className="featured-info">Wireless Keyboards</p>
            </div>
          </div>
          <div className="featured-products">
            <div className="featured-product-info">
              <div className="featured-product-img image-container">
                <img src="https://images-na.ssl-images-amazon.com/images/I/41W0OwHWdCL.jpg" className="image" alt="" />
              </div>
              <p className="featured-info">IBM Keyboards</p>
            </div>
            <div className="featured-product-info">
              <div className="featured-product-img image-container">
                <img src="https://images-na.ssl-images-amazon.com/images/I/71cE1j3kqVL._SL1500_.jpg" className="image" alt="" />
              </div>
              <p className="featured-info">Refurbished Keyboards</p>
            </div>
            <div className="featured-product-info">
              <div className="featured-product-img image-container">
                <img src="https://images-na.ssl-images-amazon.com/images/I/71t-MZrdWwL._SL1500_.jpg" className="image" alt="" />
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
