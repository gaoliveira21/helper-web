import React from 'react';

import page404 from '../../assets/images/page404.svg';

import { Container, Message, Image } from './styles';

function Page404() {
  return (
    <Container>
      <h3>Helper</h3>
      <Message>
        <h1>404</h1>
        <strong>Ooops!</strong>
        <p>
          Essa não é a página que <br /> você está procurando.
        </p>
        <button type="submit">Ir para página principal</button>
      </Message>

      <Image>
        <img src={page404} alt="Figura da página 404" />
      </Image>
    </Container>
  );
}

export default Page404;
