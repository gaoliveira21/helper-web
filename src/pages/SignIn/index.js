import React from 'react';

import {
  Container,
  ImageContent,
  Title,
  Image,
  Content,
  FormContent,
  Footer,
} from './styles';

import loginImage from '../../assets/images/login.svg';

function SignIn() {
  return (
    <Container>
      <ImageContent>
        <Title>
          <h1>Helper</h1>
        </Title>
        <Image>
          <img src={loginImage} alt="Cadastre-se" />
        </Image>
      </ImageContent>
      <Content>
        <FormContent>
          <h1>Helper</h1>
          <h2>Acessar o sistema</h2>
          <form>
            <label htmlFor="email">E-mail</label>
            <input type="text" placeholder="Digite seu e-mail" id="email" />

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              id="password"
            />

            <button type="submit">Entrar</button>
          </form>
        </FormContent>
        <Footer>
          <p>Não tem conta?</p>
          <a href="#!">Cadastre-se agora mesmo!</a>
        </Footer>
      </Content>
    </Container>
  );
}

export default SignIn;
