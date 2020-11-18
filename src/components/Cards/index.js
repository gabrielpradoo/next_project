import React, { useEffect, useState } from 'react';

/* import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; */

import {
  FaSmile,
  FaCamera,
  FaShip,
  FaTractor,
  FaBinoculars,
} from 'react-icons/fa';
import { GiSpeedBoat } from 'react-icons/gi';

import {
  CardsContainer,
  Card,
  CardBar,
  CardBarContent,
  CardFront,
  CardBack,
} from './styles';

function Cards() {
  let count = 0;

  function NextImg() {
    if (typeof window !== 'undefined') {
      const scroll = document.querySelector('#items');
      if (count < 5000) {
        count += 1700;
        scroll.scrollTo(count, 0);
        console.log('next click');
      } else {
        count = 0;
        scroll.scrollTo(count, 0);
        console.log('next end');
      }
    }
  }

  function PrevImg() {
    if (typeof window !== 'undefined') {
      const scroll = document.querySelector('#items');
      if (count > 0) {
        count -= 1700;
        scroll.scrollTo(count, 0);
        console.log('pre click');
      } else {
        count = 5000;
        scroll.scrollTo(count, 0);
        console.log('pre end');
      }
    }
  }
  const [infos /* setInfos */] = useState([
    {
      day: 1,
      header: [{ title: 'Bem-Vindo!', icon: <FaSmile /> }],
      background: '#283926',
      content:
        'Você acaba de chegar em Corumbá, uma cidade com mais de 230 anos, cheia de encantos, gente hospitaleira, calorosa e que possui o mais bonito Pantanal de todos. Aproveite para desfrutar o melhor hotel da cidade e conhecer um pouco da vida noturna.',
      images: [
        '/img/terra/first/1.webp',
        '/img/terra/first/2.webp',
        '/img/terra/first/3.webp',
      ],
      rotery: ['Chegada na Capital do Pantanal', 'Pernoite'],
    },
    {
      day: 2,
      header: [
        { title: 'City Tur', icon: <FaCamera /> },
        { title: 'Embarque', icon: <FaShip /> },
      ],
      background: '#A86869',
      content:
        'Descubra nas Ladeiras de Corumbá, as belezas do Casario e a história do nosso Povo.Uma visita até a Bolívia para fazer compras e conheceer a diversidade cultural que nos cerca e lógico o tão esperado momento do embarque no Barco Hotel. Prepare-se !!! Um passeio de tirar o fôlego ainda está por vir.',
      images: [
        '/img/terra/second/1.webp',
        '/img/terra/second/5.webp',
        '/img/terra/second/3.webp',
        '/img/terra/second/2.webp',
        '/img/terra/second/4.webp',
        '/img/terra/second/6.webp',
        '/img/terra/second/7.webp',
        '/img/terra/second/8.webp',
      ],
      rotery: [
        'CIRCUITO HISTÓRICO-CULTURAL',
        'MINI TOUR DE COMPRAS BOLÍVIA',
        'ALMOÇO NA CIDADE S/ BEBIDA',
        'EMBARQUE NO BARCO COMODORO',
        'FOCAGEM NOTURNA',
      ],
    },
    {
      day: 3,
      header: [
        { title: 'Safári Ecológico', icon: <FaBinoculars /> },
        { title: 'Fazenda São João', icon: <FaTractor /> },
      ],
      background: '#FFBA00',
      content:
        'Um safári ecológico pela estrada parque até chegar na fazenda São João, podendo ali andar a cavalo ou fazer caminhada em plena natureza. Apreciar um típico Almoço Pantaneiro e algumas merecidas horas de descanso em um confortável redário.',
      images: [
        '/img/terra/third/1.webp',
        '/img/terra/third/2.webp',
        '/img/terra/third/3.webp',
        '/img/terra/third/4.webp',
        '/img/terra/third/5.webp',
        '/img/terra/third/6.webp',
      ],
      rotery: [
        'Estrada Parque Pantanal Sul',
        'Safári 4x4 Cavalgada',
        'Carrossel Trator',
      ],
    },
    {
      day: 4,
      header: [
        { title: 'Passeio de Bote pelo Pantanal!', icon: <GiSpeedBoat /> },
      ],
      background: '#687C7A',
      content:
        'Em afluentes do Rio Paraguai, você irá sentir a sensação de liberdade, conhecer e vivenciar as belezas do Pantanal em sua essência. Tomar banho de rio, dar uma volta de caiaque e sentir de pertinho toda a grandeza desse bioma. É emocionante!',
      images: [
        '/img/terra/fourth/1.webp',
        '/img/terra/fourth/2.webp',
        '/img/terra/fourth/3.webp',
        '/img/terra/fourth/4.webp',
        '/img/terra/fourth/5.webp',
      ],
      rotery: [
        'Rio Paraguai Mirim',
        'Safári Fluvial',
        'Experiência do Banho de Rio',
        'Pôr do Sol',
      ],
    },
    {
      day: 5,
      header: [{ title: 'Chegada ao Porto Geral!', icon: <FaShip /> }],
      background: '#8B1E23',
      content:
        'Pronto! Você já pode dizer que conheceu um pedacinho da maior planíce alagada do mundo, o Pantanal!',
      images: ['/img/terra/fifth/1.webp', '/img/terra/fifth/2.webp'],
      rotery: ['Porto Geral', 'Café da Manha', 'Desembarque'],
    },
  ]);

  return (
    <CardsContainer>
      {infos.map((info) => (
        <Card key={info.day} className="card two">
          <CardBar>
            <CardBarContent>
              <CardFront>
                <header>
                  <h3 style={{ background: `${info.background}` }}>
                    {info.day}º Dia
                  </h3>
                  <div className="card-titles">
                    {info.header.map((head) => (
                      <div className="description">
                        <span>{head.icon}</span>
                        <h3>{head.title}</h3>
                      </div>
                    ))}
                  </div>
                </header>

                <div className="card-content">
                  <p>{info.content}</p>
                </div>
              </CardFront>
              <CardBack>
                <header>
                  <h3 style={{ background: `${info.background}` }}>
                    {info.day}º Dia
                  </h3>
                  <div className="card-titles">
                    {info.header.map((head) => (
                      <div className="description">
                        <span>{head.icon}</span>
                        <h3>{head.title}</h3>
                      </div>
                    ))}
                  </div>
                </header>
                <ul>
                  {info.rotery.map((rotery) => (
                    <li>{rotery}</li>
                  ))}
                </ul>
              </CardBack>
            </CardBarContent>
          </CardBar>
          <div id="items-wrapper" /* onFocus={} */>
            <div id="items" className="items 2">
              <div className="buttons">
                <button className="prev" onClick={() => PrevImg()}>
                  {'<'}
                </button>
                <button className="next" onClick={() => NextImg()}>
                  {'>'}
                </button>
              </div>
              {info.images.map((image) => (
                <div className="item">
                  <img src={image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}

      {/*       
      <Card key={infos[0].day.toString()} className="card one">
        <CardBar>
          <CardBarContent>
            <CardFront>
              <header>
                <h3 style={{ background: '#283926' }}>{infos[0].day}º Dia</h3>
                <div className="card-titles">
                  <div className="welcome description">
                    {infos[0].icons}
                    <span>{infos[0].titles[0]}</span>
                  </div>
                  {/* <div className="welcome description">
                {infos[0].icons}
                <span>{infos[0].titles[0]}</span>
              </div> 
                </div>
              </header>

              <div className="card-content">
                <p>{infos[0].content}</p>
              </div>
            </CardFront>
            <CardBack>
              <p>{infos[0].rotery}</p>
            </CardBack>
          </CardBarContent>
        </CardBar>
        <div id="items-wrapper" >
          <div id="1" className="items 1">
            <div className="item">
              <img src={infos[0].image} alt="" />
            </div>
            <div className="item">
              <img src={infos[1].image} alt="" />
            </div>
            <div className="item">
              <img src={infos[2].image} alt="" />
            </div>
            <div className="item">
              <img src={infos[3].image} alt="" />
            </div>
            <div className="item">
              <img src={infos[4].image} alt="" />
            </div>
          </div>
        </div>
      </Card>
      <Card key={infos[1].day.toString()} className="card two">
        <CardBar>
          <CardBarContent>
            <CardFront>
              <header>
                <h3 style={{ background: '#A86869' }}>{infos[1].day}º Dia</h3>
                <div className="card-titles">
                  <div className="welcome description">
                    {infos[1].icons[0]}
                    <span>{infos[1].titles[0]}</span>
                  </div>
                  <div className="welcome description">
                    {infos[1].icons[1]}
                    <span>{infos[1].titles[1]}</span>
                  </div>
                </div>
              </header>

              <div className="card-content">
                <p>{infos[1].content}</p>
              </div>
            </CardFront>
            <CardBack>
              <p>{infos[1].rotery}</p>
            </CardBack>
          </CardBarContent>
        </CardBar>
        <div id="items-wrapper" >
          <div id="2" className="items 2">
            <div className="item">
              <img src={infos[0].image} alt="" />
            </div>
            <div className="item">
              <img src={infos[1].image} alt="" />
            </div>
            <div className="item">
              <img src={infos[2].image} alt="" />
            </div>
            <div className="item">
              <img src={infos[3].image} alt="" />
            </div>
            <div className="item">
              <img src={infos[4].image} alt="" />
            </div>
          </div>
        </div>
      </Card>
      <Card key={infos[2].day.toString()} className="card tree">
        <CardBar>
          <CardBarContent>
            <CardFront>
              <header>
                <h3 style={{ background: '#FFBA00' }}>{infos[2].day}º Dia</h3>
                <div className="card-titles">
                  <div className="welcome description">
                    {infos[2].icons[0]}
                    <span>{infos[2].titles[0]}</span>
                  </div>
                  <div className="welcome description">
                    {infos[2].icons[1]}
                    <span>{infos[2].titles[1]}</span>
                  </div>
                </div>
              </header>

              <div className="card-content">
                <p>{infos[2].content}</p>
              </div>
            </CardFront>
            <CardBack>
              <p>{infos[2].rotery}</p>
            </CardBack>
          </CardBarContent>
        </CardBar>
        <div id="items-wrapper">
          <div id="3" className="items 3">
            <div className="item">
              <img src={infos[0].image} alt="" />
            </div>
            <div className="item">
              <img src={infos[1].image} alt="" />
            </div>
            <div className="item">
              <img src={infos[2].image} alt="" />
            </div>
            <div className="item">
              <img src={infos[3].image} alt="" />
            </div>
            <div className="item">
              <img src={infos[4].image} alt="" />
            </div>
          </div>
        </div>
      </Card>
      <Card key={infos[3].day.toString()} className="card four">
        <CardBar>
          <CardBarContent>
            <CardFront>
              <header>
                <h3 style={{ background: '#687C7A' }}>{infos[3].day}º Dia</h3>
                <div className="card-titles">
                  <div className="welcome description">
                    {infos[3].icons}
                    <span>{infos[3].titles[0]}</span>
                  </div>
                  {/* <div className="welcome description">
                {infos[3].icons}
                <span>{infos[3].titles[0]}</span>
              </div> 
                </div>
              </header>

              <div className="card-content">
                <p>{infos[3].content}</p>
              </div>
            </CardFront>
            <CardBack>
              <p>{infos[3].rotery}</p>
            </CardBack>
          </CardBarContent>
        </CardBar>
        <div id="items-wrapper">
          <div id="4" className="items 4">
            <div className="item">
              <img src={infos[0].image} alt="" />
            </div>
            <div className="item">
              <img src={infos[1].image} alt="" />
            </div>
            <div className="item">
              <img src={infos[2].image} alt="" />
            </div>
            <div className="item">
              <img src={infos[3].image} alt="" />
            </div>
            <div className="item">
              <img src={infos[4].image} alt="" />
            </div>
          </div>
        </div>
      </Card>
      <Card key={infos[4].day.toString()} className="card five">
        <CardBar>
          <CardBarContent>
            <CardFront>
              <header>
                <h3 style={{ background: '#8B1E23' }}>{infos[4].day}º Dia</h3>
                <div className="card-titles">
                  <div className="welcome description">
                    {infos[4].icons}
                    <span>{infos[4].titles[0]}</span>
                  </div>
                </div>
              </header>

              <div className="card-content">
                <p>{infos[4].content}</p>
              </div>
            </CardFront>
            <CardBack>
              <p>{infos[4].rotery}</p>
            </CardBack>
          </CardBarContent>
        </CardBar>
        <div id="items-wrapper" >
          <div id="5" className="items 5">
            <div className="item">
              <img src={infos[0].image} alt="" />
            </div>
            <div className="item">
              <img src={infos[1].image} alt="" />
            </div>
            <div className="item">
              <img src={infos[2].image} alt="" />
            </div>
            <div className="item">
              <img src={infos[3].image} alt="" />
            </div>
            <div className="item">
              <img src={infos[4].image} alt="" />
            </div>
          </div>
        </div>
      </Card>
     */}
    </CardsContainer>
  );
}

export default Cards;
