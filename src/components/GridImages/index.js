import React from 'react';

import { Container } from './styles';

function GridImages({ page }) {
  const imgTerra = [
    '/img/terra/all/1.webp',
    '/img/terra/all/2.webp',
    '/img/terra/all/3.webp',
    '/img/terra/all/4.webp',
    '/img/terra/all/5.webp',
    '/img/terra/all/6.webp',
    '/img/terra/all/7.webp',
    '/img/terra/all/8.webp',
    '/img/terra/all/9.webp',
    '/img/terra/all/10.webp',
    '/img/terra/all/11.webp',
    '/img/terra/all/12.webp',
    '/img/terra/all/13.webp',
    '/img/terra/all/14.webp',
    '/img/terra/all/15.webp',
    '/img/terra/all/16.webp',
    '/img/terra/all/17.webp',
    '/img/terra/all/18.webp',
    '/img/terra/all/19.webp',
    '/img/terra/all/20.webp',
    '/img/terra/all/21.webp',
    '/img/terra/all/22.webp',
    '/img/terra/all/23.webp',
    '/img/terra/all/24.webp',
    '/img/terra/all/25.webp',
    '/img/terra/all/26.webp',
    '/img/terra/all/27.webp',
    '/img/terra/all/28.webp',
  ];

  const imgAgua = [
    'img/agua/all/1.webp',
    'img/agua/all/2.webp',
    'img/agua/all/3.webp',
    'img/agua/all/4.webp',
    'img/agua/all/5.webp',
    'img/agua/all/6.jpg',
    'img/agua/all/7.jpg',
    'img/agua/all/8.jpg',
    'img/agua/all/9.jpg',
    'img/agua/all/10.jpg',
    'img/agua/all/11.jpg',
    'img/agua/all/12.jpg',
    'img/agua/all/13.jpg',
    'img/agua/all/14.jpg',
    'img/agua/all/15.jpg',
    'img/agua/all/16.jpg',
    'img/agua/all/17.jpg',
    'img/agua/all/18.jpg',
    'img/agua/all/19.jpg',
    'img/agua/all/20.jpg',
    'img/agua/all/21.jpg',
    'img/agua/all/22.jpg',
    'img/agua/all/23.jpg',
    'img/agua/all/24.jpg',
    'img/agua/all/25.jpg',
    'img/agua/all/26.jpg',
    'img/agua/all/27.jpg',
    'img/agua/all/28.jpg',
    'img/agua/all/29.jpg',
  ];

  const imgComodoro = [
    '/img/comodoro/1.jpg',
    '/img/comodoro/2.jpg',
    '/img/comodoro/3.jpg',
    '/img/comodoro/4.jpg',
    '/img/comodoro/5.jpg',
    '/img/comodoro/6.jpg',
    '/img/comodoro/7.jpg',
    '/img/comodoro/8.jpg',
    '/img/comodoro/9.jpg',
    '/img/comodoro/10.jpg',
    '/img/comodoro/11.jpg',
    '/img/comodoro/12.jpg',
    '/img/comodoro/13.jpg',
  ];

  const imgVip = [
    '/img/vip/1.webp',
    '/img/vip/2.webp',
    '/img/vip/3.webp',
    '/img/vip/4.webp',
    '/img/vip/5.webp',
    '/img/vip/6.webp',
    '/img/vip/7.webp',
    '/img/vip/8.webp',
    '/img/vip/9.webp',
    '/img/vip/10.webp',
    '/img/vip/11.webp',
    '/img/vip/12.webp',
    '/img/vip/13.webp',
  ];

  if (page === 'Terra' || page === 'terra') {
    return (
      <Container>
        {imgTerra.map((img) => (
          <figure>
            <img src={`${img}`} />
          </figure>
        ))}
      </Container>
    );
  } else if (page === 'Agua' || page === 'agua') {
    return (
      <Container>
        {imgAgua.map((img) => (
          <figure>
            <img src={`${img}`} />
          </figure>
        ))}
      </Container>
    );
  } else if (page === 'Comodoro' || page === 'comodoro') {
    return (
      <Container>
        {imgComodoro.map((img) => (
          <figure>
            <img src={`${img}`} />
          </figure>
        ))}
      </Container>
    );
  } else if (page === 'Vip' || page === 'vip') {
    return (
      <Container>
        {imgVip.map((img) => (
          <figure>
            <img src={`${img}`} />
          </figure>
        ))}
      </Container>
    );
  }
}

export default GridImages;
