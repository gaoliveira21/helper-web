import React from 'react';

import { Container, Image, Content, FormContent, Footer } from './styles';

import loginImage from '../../assets/images/login.svg';

function SignIn() {
  return (
    <Container>
      <Image>
        <strong>Helper</strong>
        <img src={loginImage} alt="Login" />
      </Image>
      <Content>
        <FormContent>
          <strong>Helper</strong>
          <h1>Acessar o sistema</h1>
          <form>
            <label htmlFor="email">E-mail</label>
            <input type="text" placeholder="Digite seu E-mail" id="email" />

            <label htmlFor="password">Senha</label>
            <input type="text" placeholder="Digite sua senha" id="password" />

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
