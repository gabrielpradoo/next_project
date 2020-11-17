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

function Earth() {
  const [world /* setWorld */] = useState('Roteiro Terra');

  /*     function handleChangeWord() {
    const divContent = document.getElementsByClassName('opacity');
    const monitor = divContent.addEventListener('mouseover');

    return console.log(monitor);
  } 
 */
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
          Um Roteiro pra você que busca conhecer o Pantanal cheio de Aventuras.
        </h3>

        <p>
          São <strong>cinco dias</strong> de conhecimento e descobertas
          radicais.
        </p>
      </Main>

      <Cards />

      <Footer />
    </Container>
  );
}

export default Earth;