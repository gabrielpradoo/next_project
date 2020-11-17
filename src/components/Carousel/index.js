import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container } from './styles';

function SampleNextArrow() {
  return <div style={{ display: 'none' }} />;
}

function SamplePrevArrow() {
  return <div style={{ display: 'none' }} />;
}

function Carousel() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Container>
      <Slider className="carrosel" {...settings}>
        <div>
          <img src="/img/comodoro.webp" alt="Comodoro" />
        </div>
        <div>
          <img src="/img/vip.webp" alt="Vip" />
        </div>
        <div>
          <img src="/img/comodoro1.webp" alt="Comodoro" />
        </div>
        <div>
          <img src="/img/vip1.webp" alt="Vip" />
        </div>
      </Slider>
    </Container>
  );
}

export default Carousel;
