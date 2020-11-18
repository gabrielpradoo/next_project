import React from 'react';
import Header from '../../components/Header1';
import HeaderCarousel from '../../components/HeaderCarousel';
import Apresentation from '../../components/Apresentation';
import Infos from '../../components/Infos';
import Itinerary from '../../components/Itinerary';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

/* import comodoroImg from '../../assets/comodoro.svg'; */
/* import vipImg from '../../assets/vip.svg'; */

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <HeaderCarousel />
      <Infos />
      <Itinerary />
      <Apresentation />
      <Carousel />
      <Footer />
    </Container>
  );
}

export default Home;
