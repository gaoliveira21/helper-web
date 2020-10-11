import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, BackIcon } from './style';

function Header({ title, description, label }) {
  const history = useHistory();

  function navigateBack() {
    history.goBack();
  }

  return (
    <Container>
      <nav>
        <button type="button" onClick={navigateBack}>
          <BackIcon />
          Voltar
        </button>
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
