import React from 'react';

import { Container } from './styles';

function Apresentation() {
  return (
    <Container>
      <div>
        <h2>
          Um roteiro <strong>Incrível!</strong>
        </h2>
        <p>
          Viver o Pantanal na sua essência.
          <br /> Conhecer uma cidade histórica.
          <br />
          Sentir o cheiro do mato, o Vento no rosto e o Frescor da Água do Rio.
          <br /> Observar a Fauna e Flora de pertinho, ouvindo o som da
          Floresta.
          <br /> Desbravar o Pantanal pela noite, atrás de Onças e Jacarés.
        </p>
      </div>
      <iframe
        title="video"
        src="https://www.youtube.com/embed/e7jJ1fmMLm0"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Container>
  );
}

export default Apresentation;
