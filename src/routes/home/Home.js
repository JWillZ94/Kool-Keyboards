import React, { Component } from 'react';
import Slider from 'react-slick';
import './Home.css';

class Home extends Component {
  render() {
    var settings = {
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
              <p>Home</p>
              <p>loremckrwbcfkbwhvbrlhesbhbdlcvhb zrdhvb;hrzdbv;rbsevlhbresjhvbjrhesbvlhjbdrljhvb lhrdbvlhblhcvjbdhjvbljhdxbhvxbdhjbvhjrdvbdhvjdhvhrdbrbfvdbhjfhbjdbvbdrvbjbjdrvdbhjbvjdrhb</p>
            </div>
          </div>
          <div className="home-cover-2">
            <div className="home-cover-text">
              <p>YEAHHH</p>
              <p>loremckrwbcfkbwhvbrlhesbhbdlcvhb zrdhvb;hrzdbv;rbsevlhbresjhvbjrhesbvlhjbdrljhvb lhrdbvlhblhcvjbdhjvbljhdxbhvxbdhjbvhjrdvbdhvjdhvhrdbrbfvdbhjfhbjdbvbdrvbjbjdrvdbhjbvjdrhb</p>
            </div>
          </div>
          <div className="home-cover-3">
            <div className="home-cover-text">
              <p>THIRDDDDDDDD</p>
              <p>loremckrwbcfkbwhvbrlhesbhbdlcvhb zrdhvb;hrzdbv;rbsevlhbresjhvbjrhesbvlhjbdrljhvb lhrdbvlhblhcvjbdhjvbljhdxbhvxbdhjbvhjrdvbdhvjdhvhrdbrbfvdbhjfhbjdbvbdrvbjbjdrvdbhjbvjdrhb</p>
            </div>
          </div>
        </Slider>
        <div className="featured">
          <p>Featured</p>
          <Slider {...settings}>
            <div className="featured-products">
              <div className="featured-product-info">
                <img src="https://img2.owcnow.com/imgs/ndesc/Apple/APLMC184LLAx/GradeA/Excellent_hero.jpg" width="300" alt="" />
                <p>gaming keyboards</p>
              </div>
              <div className="featured-product-info">
                <img src="https://img2.owcnow.com/imgs/ndesc/Apple/APLMC184LLAx/GradeA/Excellent_hero.jpg" width="300" alt="" />
              </div>
              <div className="featured-product-info">
                <img src="https://img2.owcnow.com/imgs/ndesc/Apple/APLMC184LLAx/GradeA/Excellent_hero.jpg" width="300" alt="" />
              </div>
            </div>
            <div className="featured-products">
              <div className="featured-product-info">
                <img src="https://img2.owcnow.com/imgs/ndesc/Apple/APLMC184LLAx/GradeA/Excellent_hero.jpg" width="300" alt="" />
              </div>
              <div className="featured-product-info">
                <img src="https://img2.owcnow.com/imgs/ndesc/Apple/APLMC184LLAx/GradeA/Excellent_hero.jpg" width="300" alt="" />
              </div>
              <div className="featured-product-info">
                <img src="https://img2.owcnow.com/imgs/ndesc/Apple/APLMC184LLAx/GradeA/Excellent_hero.jpg" width="300" alt="" />
              </div>
            </div>
          </Slider>
        </div>

      </div>
    );
  }
}

export default Home;
