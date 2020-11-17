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
          São <strong>cinco dias</strong> de conhecimento e descobertas
          radicais.
        </p>
      </Main>

      <Cards />

      <Content>
        <div className="first day">
          <div className="day-block">
            <p style={{ background: '#283926' }}>1º Dia</p>

            <div className="day-block-content">
              <div className="welcome description">
                <FaSmile />
                <span>Bem-Vindo!</span>
              </div>
            </div>
          </div>
          <div className="day-content">
            <p>
              Você acaba de chegar em Corumbá, uma cidade com mais de 230 anos,
              cheia de encantos, gente hospitaleira, calorosa e que possui o
              mais bonito Pantanal de todos. <br /> <br />
              Aproveite para desfrutar o melhor hotel da cidade e conhecer um
              pouco da vida noturna.
            </p>
          </div>
          <div
            style={{
              background: `url('/img/corumba-aereo.webp') center 37%`,
              borderBottomLeftRadius: '8px',
              borderBottomRightRadius: '8px',
            }}
            className="day-img"
          ></div>
        </div>

        <div className="secondary day">
          <div className="day-block">
            <p style={{ background: '#A86869' }}>2º Dia</p>

            <div className="day-block-content">
              <div className="city-tour description">
                <FaCamera />
                <span>City Tur</span>
              </div>
              <div className="boarding description">
                <FaShip />
                <span>Embarque</span>
              </div>
            </div>
          </div>
          <div className="day-content">
            <p>
              <strong>Descubra nas Ladeiras</strong> de Corumbá, as belezas do
              Casario e a história do nosso Povo.
              <br />
              <br />
              Uma visita até a Bolívia para fazer compras e conheceer a
              diversidade cultural que nos cerca e lógico o tão esperado{' '}
              <strong>momento do embarque no Barco Hotel. </strong>
              Prepare-se !!! Um passeio de tirar o fôlego ainda está por vir
            </p>
          </div>
          <div
            style={{
              background: `url('/img/por_do_sol.webp') center 37%`,
              borderBottomLeftRadius: '8px',
              borderBottomRightRadius: '8px',
            }}
            className="day-img"
          ></div>
        </div>

        <div className="third day">
          <div className="day-block">
            <p style={{ background: '#FFBA00' }}>3º Dia</p>

            <div className="day-block-content">
              <div className="safari description">
                <FaBinoculars />
                <span>Safári Ecológico</span>
              </div>
              <div className="farm description">
                <FaTractor />
                <span>Fazenda São João</span>
              </div>
            </div>
          </div>
          <div className="day-content">
            <p>
              <strong>Um safári ecológico</strong> pela estrada parque até
              chegar na fazenda São João, podendo ali andar a cavalo ou fazer
              caminhada em plena natureza.
              <br />
              <br />
              <strong>Apreciar um típico Almoço Pantaneiro</strong> e algumas
              merecidas horas de descanso em um confortável redário.
            </p>
          </div>
          <div
            style={{
              background: `url('/img/safari.webp') center 37%`,
              borderBottomLeftRadius: '8px',
              borderBottomRightRadius: '8px',
            }}
            className="day-img"
          ></div>
        </div>

        <div className="fourth day">
          <div className="day-block">
            <p style={{ background: '#687C7A' }}>4º Dia</p>

            <div className="day-block-content">
              <div className="boat-ride description">
                <GiSpeedBoat />
                <span>Passeio de Bote pelo Pantanal!</span>
              </div>
            </div>
          </div>
          <div className="day-content">
            <p>
              <strong>Em afluentes do Rio Paraguai</strong>, você irá sentir a
              sensação de liberdade, conhecer e vivenciar as belezas do Pantanal
              em sua essência.
              <br />
              <br />
              <strong>Tomar banho de rio</strong>, dar uma volta de caiaque e
              sentir de pertinho toda a grandeza desse bioma.
              <br />
              <br />É emocionante!
            </p>
          </div>
          <div
            style={{
              background: `url('/img/kayak.webp') 90% 10%`,
              borderBottomLeftRadius: '8px',
              borderBottomRightRadius: '8px',
            }}
            className="day-img"
          ></div>
        </div>

        <div className="fifth day">
          <div className="day-block">
            <p style={{ background: '#8B1E23' }}>5º Dia</p>

            <div className="day-block-content">
              <div className="arrival description">
                <FaShip />
                <span>Chegada ao Porto Geral!</span>
              </div>
            </div>
          </div>
          <div className="day-content">
            <span>Pronto!</span>
            <p>
              Você já pode dizer que conheceu um pedacinho da maior planíce
              alagada do mundo, o Pantanal!
            </p>
          </div>
          <div
            style={{
              background: `url('/img/crb-por-sol.webp') center 90%`,
              borderBottomLeftRadius: '8px',
              borderBottomRightRadius: '8px',
            }}
            className="day-img"
          ></div>
        </div>
      </Content>
      <Footer />
    </Container>
  );
}

export default Water;
