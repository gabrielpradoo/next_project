import React from 'react';
import Header from '../../Header1';
import HeaderCarousel from '../../HeaderCarousel';
import Apresentation from '../../Apresentation';
import Infos from '../../Infos';
import Itinerary from '../../Itinerary';
import FooterCarousel from '../../FooterCarousel';
import Footer from '../../Footer';

import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <Header />
      <HeaderCarousel />
      <Infos />
      <Itinerary />
      <Apresentation />
      <FooterCarousel />
      <Footer />
    </Container>
  );
};

export default Home;
