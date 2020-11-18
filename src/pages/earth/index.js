import React from 'react';
import Header from '../../components/Header1';
import Footer from '../../components/Footer';

import { Container, HeaderImg, Main } from './styles';
import Cards from '../../components/Cards';

function Earth() {
  const world = 'Roteiro Terra';
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
