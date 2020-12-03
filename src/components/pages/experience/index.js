import React from 'react';
import Link from 'next/link';
import Header from '../../Header1';
import Footer from '../../Footer';

import { Container, Main, AboutUsCard, Cards } from './styles';

const Experience = () => {
  return (
    <Container>
      <Header />
      <Main>
        <AboutUsCard>
          <img
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            src="/img/kayama.webp"
            alt=""
          />
          <div className="opacity">
            <div className="content">
              <div className="line"></div>
              <h2>A Experiência</h2>
              <div className="line"></div>
            </div>
          </div>
        </AboutUsCard>

        <Cards>
          <div className="xp-pantaneira">
            <header>
              <strong> Uma Experiência Pantaneira</strong>
            </header>
            <p>
              Agora o Cruzeiro Pantanal, mais do que nunca orgulha-se de poder
              dar a voce um completo tratamento VIP, com barcos modernos, com
              amplo espaço e todo o conforto e a segurança necessária para uma
              viagem inesquecível pelo Pantanal Sul-Matogrossense.Tudo isso
              junto ao nosso roteiro diversificado, possibilitando as seguntes
              atividades: <br /> <br />
              <strong>
                *Ecoturismo <br />
                *Pesca Esportiva <br />
                *Canoagem <br />
                *Hipismo nas fazendas da região <br />
                *Turismo gastronômico <br />
                *Safári Ecológico <br /> <br />
              </strong>
              E agregando a tecnologia, sustentabilidade, acessibilidade e
              segurança a sua viagem, venha viver a emoção da pesca esportiva ou
              do Ecoturismo conosco à bordo de nossos barcos, um novo estilo de
              navegar pelo Pantanal Sul-Matogrossense.
            </p>
          </div>
          <div className="reserve">
            <Link href="/carrinho">
              <a>Reserve Já</a>
            </Link>
          </div>

          <div className="ecoturismo">
            <header>
              {' '}
              <strong> O Ecoturismo</strong>
            </header>
            <p>
              Desfrute do prazer de um Ecoturismo com o requinte e o conforto de
              um grande navio e viva momentos inesquecíveis no Pantanal
              Sul-Matogrossense.
            </p>
          </div>
          <div className="pesca-esportiva">
            <header>
              {' '}
              <strong> A Pesca Esportiva</strong>
            </header>
            <p>
              Um lugar indescritível para o pescador esportivo, venha capturar
              seu troféu! Aguardamos você com o melhor atendimento da região!
            </p>
          </div>
          <div className="gastronomia">
            <header>
              {' '}
              <strong> A Gastronomia</strong>
            </header>
            <p>
              O Cruzeiro Pantanal oferece o que há de melhor na cultura
              pantaneiroa, deguste de pratos típicos e saboreie sensações
              inimagináveis.
            </p>
          </div>
          <div className="safari-ecologico">
            <header>
              {' '}
              <strong> O Safári Ecológico</strong>
            </header>
            <p>
              Venha explorar a vida selvagem em seu habitat natural e as lindas
              paisagens que nossa cidade podde lhe oferecer!
            </p>
          </div>

          <div className="ecoturismo-img">
            <img src="/img/ecoturismo.jpeg" alt="" />
          </div>
          <div className="pesca-img">
            <img src="/img/pesca.jpg" alt="" />
          </div>
          <div className="gastronomia-img">
            <img src="/img/culinaria.jpg" alt="" />
          </div>
          <div className="safari-img">
            <img src="/img/agua/all/1.webp" alt="" />
          </div>
        </Cards>
      </Main>
      <Footer />
    </Container>
  );
};

export default Experience;
