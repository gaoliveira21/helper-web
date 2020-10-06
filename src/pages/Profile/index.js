import React from 'react';

import { Header, Arrow } from './styles';

function Profile() {
  return (
    <Header>
      <nav>
        <a href="#!">Voltar</a>
        <strong>Nome da página</strong>
        <h3>Helper</h3>
      </nav>

      <div>
        <h1>Título da página</h1>
        <div>
          <p>Descrição</p>
        </div>
      </div>
    </Header>
  );
}

export default Profile;
