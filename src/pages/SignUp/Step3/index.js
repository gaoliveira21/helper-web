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
          <label htmlFor="profile">Perfil</label>
          <input type="file" id="profile" />

          <label htmlFor="cnpj">CNPJ (Opcional)</label>
          <input type="text" placeholder="Digite seu CNPJ" id="cnpj" />

          <label htmlFor="initials">Sigla (Opcional)</label>
          <input
            type="text"
            placeholder="Digite a sigla da sua entidade"
            id="initials"
          />

          <label htmlFor="description"> Breve descrição</label>
          <textarea name="description" id="description" />

          <button type="submit">Confirmar cadastro</button>
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
