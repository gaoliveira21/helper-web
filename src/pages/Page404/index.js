import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../contexts/auth';

import page404 from '../../assets/images/page404.svg';

import { Container, Message, Image } from './styles';

function Page404() {
  const { signed } = useAuth();
  const history = useHistory();

  function handleNavigate() {
    if (signed) return history.push('/dashboard');

    return history.push('/sign-in');
  }

  return (
    <Container>
      <h3>Helper</h3>
      <Message>
        <h1>404</h1>
        <strong>Ooops!</strong>
        <p>
          Essa não é a página que <br /> você está procurando.
        </p>
        <button type="button" onClick={handleNavigate}>
          Ir para página principal
        </button>
      </Message>

      <Image>
        <img src={page404} alt="Figura da página 404" />
      </Image>
    </Container>
  );
}

export default Page404;
