import React from 'react';

import { Container } from './styles';

function HeaderCarousel() {
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
  /* if (typeof window !== 'undefined') {
    
    setInterval(function () {
      count += 400;
      if (count > 8000) count = 0;
      document.getElementById('items').scrollTo(count, 0);
    }, 1500);
  } */

  return (
    <Container>
      <div className="buttons">
        <button className="prev" onClick={() => PrevImg()}>
          {'<'}
        </button>
        <button className="next" onClick={() => NextImg()}>
          {'>'}
        </button>
      </div>
      <div id="items">
        <div className="item">
          <div className="opacity">
            <div className="line"></div>
            <h2>Viva Aventuras</h2>
            <div className="line"></div>
          </div>
          <img
            style={{ filter: 'blur(10px)' }}
            src="/img/comodoro.webp"
            alt="Comodoro"
          />
        </div>
        <div className="item">
          <div className="opacity">
            <div className="line"></div>
            <h2>Conheça o Pantanal de uma maneira diferente</h2>
            <div className="line"></div>
          </div>
          <img style={{ filter: 'blur(10px)' }} src="/img/vip.webp" alt="Vip" />
        </div>
        <div className="item">
          <div className="opacity">
            <div className="line"></div>
            <h2>Viva um momento de Lazer</h2>
            <div className="line"></div>
          </div>
          <img
            style={{ filter: 'blur(10px)' }}
            src="/img/terra/comodoro.webp"
            alt="Comodoro"
          />
        </div>
        <div className="item">
          <div className="opacity">
            <div className="line"></div>
            <h2>Contemple o que a natureza tem para oferecer</h2>
            <div className="line"></div>
          </div>
          <img
            style={{ filter: 'blur(10px)' }}
            src="/img/vip1.webp"
            alt="Vip"
          />
        </div>
      </div>
    </Container>
  );
}

export default HeaderCarousel;
