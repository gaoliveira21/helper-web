import React from 'react';

import { Container, BackIcon } from './style';

function Header({ title, description, label }) {
  return (
    <Container>
      <nav>
        <a href="#!">
          <BackIcon />
          Voltar
        </a>
        <strong>{label}</strong>
        <h3>Helper</h3>
      </nav>

      <div>
        <h1>{title}</h1>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </Container>
  );
}

export default Header;
