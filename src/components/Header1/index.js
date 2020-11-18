import React from 'react';
import Link from 'next/link';

import { Container } from './styles';
/* import logoImg from '../../assets/logocruzeiro.png'; */

function Header1() {
  return (
    <Container>
      <ul>
        <li>
          <Link href="/sobre">
            <a>Sobre Nós</a>
          </Link>
        </li>
        <li>
          <Link href="/experiencia">
            <a>A Experiencia</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <img src="/img/logocruzeiro.png" alt="logo" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/embarcacoes">
            <a>Nossos Barcos</a>
          </Link>
        </li>
        <li>
          <Link href="/reservas">
            <a>Reserve Já</a>
          </Link>
        </li>
      </ul>
    </Container>
  );
}

export default Header1;
