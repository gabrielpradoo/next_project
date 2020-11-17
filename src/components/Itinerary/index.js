import React from 'react';
import Link from 'next/link';

import { Container } from './styles';

function Itinerary() {
  return (
    <Container>
      <div className="itinerary-text">
        <h2>Pensando em você</h2>
        <p>
          Para atender você da melhor maneira possível, nós idealizamos dois
          caminhos, o{' '}
          <Link href="/terra">
            <a>Terra</a>
          </Link>{' '}
          e o{' '}
          <Link href="/agua">
            <a>Agua</a>
          </Link>
          .
        </p>
      </div>

      <div className="itineraries">
        <div className="itinerary-earth">
          <div className="content">
            <span>Roteiro Terra</span>
            <Link href="/earth">
              <a className="btn">RESERVE JÁ</a>
            </Link>
          </div>
        </div>
        <div className="itinerary-water">
          <div className="content">
            <span>Roteiro Água</span>
            <Link href="/water">
              <a className="btn">RESERVE JÁ</a>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Itinerary;
