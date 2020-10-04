import React from 'react';

import { Container, ImageContent, Title, Image, FormContent } from './styles';

import registerImage from '../../../assets/images/register.svg';

function SignIn() {
  return (
    <Container>
      <FormContent>
        <h1>Helper</h1>
        <h2>Cadastrar-se</h2>
        <p>Preencha os campos abaixo para efetuar o cadastro</p>
        <form>
          <label htmlFor="name">Nome da entidade</label>
          <input
            type="text"
            placeholder="Digite o nome da entidade"
            id="name"
          />

          <label htmlFor="email">E-mail</label>
          <input type="text" placeholder="Digite seu E-mail" id="email" />

          <label htmlFor="password">Senha</label>
          <input type="password" placeholder="Digite sua senha" id="password" />

          <button type="submit">Próximo</button>
        </form>

        <div>
          <span />
          <span />
          <span />
        </div>
      </FormContent>
      <ImageContent>
        <Title>
          <h1>Helper</h1>
        </Title>
        <Image>
          <img src={registerImage} alt="Cadastre-se" />
        </Image>
      </ImageContent>
    </Container>
  );
}

export default SignIn;
