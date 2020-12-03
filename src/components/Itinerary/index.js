import React from 'react';
import Link from 'next/link';

import { Container } from './styles';

function Itinerary() {
  return (
    <Container>
      <div className="itinerary-text">
        <h2>Escolha seu roteiro</h2>
        <p>
          Duas maneiras de vivenciar o pantanal, o{' '}
          <Link href="/terra">
            <a>Roteiro Terra</a>
          </Link>{' '}
          e o{' '}
          <Link href="/agua">
            <a>Roteiro Água</a>
          </Link>
          .
        </p>
      </div>

      <div className="itineraries">
        <div className="itinerary-earth">
          <div className="content">
            <Link href="/terra">
              <a className="btn">Roteiro Terra</a>
            </Link>
          </div>
        </div>
        <div className="itinerary-water">
          <div className="content">
            <Link href="/agua">
              <a className="btn">Roteiro Água</a>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Itinerary;
