import React, { useState } from 'react';

import { useAuth } from '../../contexts/auth';

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
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    await signIn({ email, password });
  }

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
          <form onSubmit={handleSubmit}>
            <InputBlock>
              <Input
                width="100%"
                type="text"
                name="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputBlock>
            <InputBlock>
              <Input
                width="100%"
                type="password"
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
