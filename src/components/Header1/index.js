import React from 'react';
import Link from 'next/link';

import { Container } from './styles';
/* import logoImg from '../../assets/logocruzeiro.png'; */

function Header1() {
  return (
    <Container>
      <ul>
        <li>
          <Link href="/about">
            <a>Sobre Nós</a>
          </Link>
        </li>
        <li>
          <Link href="/experience">
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
          <Link href="/vessels">
            <a>Nossos Barcos</a>
          </Link>
        </li>
        <li>
          <Link href="/booking">
            <a>Reserve Já</a>
          </Link>
        </li>
      </ul>
    </Container>
  );
}

export default Header1;
