import React from 'react';
import Header from '../../components/Header1';
import Apresentation from '../../components/Apresentation';
import Infos from '../../components/Infos';
import Itinerary from '../../components/Itinerary';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <Apresentation />
      <Infos />
      <Itinerary />
      <Carousel />
      <Footer />
    </Container>
  );
}

export default Home;
