import React from 'react';

import Input from '../../components/Input';

import {
  Container,
  ImageContent,
  Title,
  Image,
  Content,
  FormContent,
  InputBlock,
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
            <InputBlock>
              <Input
                width="100%"
                type="text"
                name="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
              />
            </InputBlock>
            <InputBlock>
              <Input
                width="100%"
                type="password"
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
              />
            </InputBlock>
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
