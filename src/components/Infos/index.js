import React from 'react';

import { Container } from './styles';

function Infos() {
  return (
    <Container>
      <div className="infos-title">
        <div className="infos-text">
          <div className="infos-text-content">
            <h2>
              Contemple a{' '}
              <strong>
                maior <br /> área alagável do PLANETA!
              </strong>
            </h2>
            <p>
              Venha ver de perto a imensidão da <strong>Fauna e Flora</strong>{' '}
              que o Mundo inteiro respeita e aprecia, navegando nas águas do RIO
              PARAGUAI.
            </p>
          </div>
        </div>
        <div className="infos-img"></div>
      </div>

      <div className="infos-title-1">
        <div className="infos-text">
          <div className="infos-text-content">
            <h2>
              Conheça o <strong>Pantanal</strong> de camarote
            </h2>
            <p>
              Experimente nossa <strong>Gastronomia</strong>, conheça nossa
              Cultura. Descubra nas{' '}
              <strong>Ladeiras de Corumbá, Mato Grosso do Sul</strong>, a
              história, as belezas de nosso <strong>Casario</strong> e a
              hospitalidade do <strong>nosso Povo</strong>.
            </p>
          </div>
        </div>
        <div className="infos-img-1"></div>
      </div>
    </Container>
  );
}

export default Infos;
