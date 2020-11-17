import React from 'react';

import { Container } from './styles';

function Apresentation() {
  return (
    <Container>
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
