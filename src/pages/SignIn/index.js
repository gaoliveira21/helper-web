import React from 'react';

import Input from '../../components/Input';

import {
  Container,
  ImageContent,
  Content,
  FormContent,
  InputBlock,
  ButtonContent,
} from './styles';

import loginImage from '../../assets/images/login.svg';

function SignIn() {
  return (
    <Container>
      <ImageContent>
        <h3>Helper</h3>
        <img src={loginImage} alt="Cadastre-se" />
      </ImageContent>
      <FormContent>
        <h3>Helper</h3>
        <Content>
          <div>
            <h1>Login</h1>
            <p>Preencha os campos abaixo para efetuar o login</p>
          </div>
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
            <ButtonContent>
              <button type="submit">Próximo</button>
            </ButtonContent>
          </form>
        </Content>
      </FormContent>
    </Container>
  );
}

export default SignIn;
