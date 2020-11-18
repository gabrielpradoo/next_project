import React, { useState } from 'react';
import Header from '../../components/Header1';
import Footer from '../../components/Footer';

import {
  FaSmile,
  FaCamera,
  FaShip,
  FaTractor,
  FaBinoculars,
} from 'react-icons/fa';
import { GiSpeedBoat } from 'react-icons/gi';

import { Container, HeaderImg, Main, Content } from './styles';
import Cards from '../../components/Cards';

function Water() {
  const world = 'Roteiro Água';
  return (
    <Container>
      <Header />
      <HeaderImg>
        <div className="opacity">
          <h2>{world}</h2>
        </div>
      </HeaderImg>

      <Main>
        <h3>
          Um Roteiro pra você que busca conhecer o Pantanal na sua essência.
        </h3>

        <p>
          São <strong>cinco dias</strong> de conhecimento e contemplação.
        </p>
      </Main>

      <Cards />

      <Footer />
    </Container>
  );
}

export default Water;
