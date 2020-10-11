import React from 'react';

import { Container, ImageContent, Content, CheckIcon } from './styles';

import finishRegister from '../../../assets/images/finishRegister.svg';

function SignIn() {
  return (
    <Container>
      <Content>
        <CheckIcon />
        <h1>Cadastro concluído com sucesso!</h1>
        <a href="#!">Acessar o sistema</a>
      </Content>
      <ImageContent>
        <h3>Helper</h3>
        <img src={finishRegister} alt="Cadastre-se" />
      </ImageContent>
    </Container>
  );
}

export default SignIn;
