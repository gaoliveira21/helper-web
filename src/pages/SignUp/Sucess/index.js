import React from 'react';

import { Container, ImageContent, Title, Image, Content } from './styles';

import checkCircle from '../../../assets/images/checkCircle.svg';
import finishRegister from '../../../assets/images/finishRegister.svg';

function SignIn() {
  return (
    <Container>
      <Content>
        <img src={checkCircle} alt="Cadastro concluído" />
        <h1>Cadastro concluído com sucesso!</h1>
        <a href="#!">Acessar o sistema</a>
      </Content>
      <ImageContent>
        <Title>
          <h1>Helper</h1>
        </Title>
        <Image>
          <img src={finishRegister} alt="Cadastre-se" />
        </Image>
      </ImageContent>
    </Container>
  );
}

export default SignIn;
