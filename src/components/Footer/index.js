import React from 'react';
import { FaFacebookF, FaInstagramSquare, FaYoutube } from 'react-icons/fa';

import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <div className="footer">
        <div className="find-us">
          <h3>Localização</h3>

          <div className="find-us-content">
            <p>Manoel Cavassa, 331 - Porto Geral</p>
            <p>Corumbá - MS</p>
            <p>CEP: 79310-120</p>
            <a
              className="on-map"
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/maps/ek4soiQfykKwcrXC6"
            >
              Veja no mapa
            </a>
          </div>
        </div>

        <div className="social">
          <h3>Siga nossas Redes Sociais</h3>
          <div className="social-content">
            <a
              className="on-map"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/joicetur"
            >
              <FaFacebookF color={'#f1f1f1'} size={25} />
              /JOICETUR
            </a>
            <a
              className="on-map"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/joicetur/"
            >
              <FaInstagramSquare color={'#f1f1f1'} size={25} />
              /JOICETUR
            </a>
            <a
              className="on-map"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/user/joicetur"
            >
              <FaYoutube color={'#f1f1f1'} size={25} />
              /JOICETUR
            </a>
          </div>
        </div>

        <div className="contact-us">
          <h3>Entre em contato</h3>

          <div className="contact-content">
            <p>(67) 3232.4048</p>
            <p>(67) 3232.9366</p>
            <p>(67) 99912.0265</p>
            <a className="email-contact" href="mailto:contato@joicetur.com.br">
              contato@joicetur.com.br
            </a>
          </div>
        </div>
      </div>

      <div className="dev-footer">
        <p>
          Joice Tur 2020® - Todos os direitos reservados |{' '}
          <a
            className="on-map"
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/5567999398321"
          >
            Desenvolvido por PJ2
          </a>
        </p>
      </div>
    </Container>
  );
}

export default Footer;
