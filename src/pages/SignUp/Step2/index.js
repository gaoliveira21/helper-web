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
          <label htmlFor="city">Cidade</label>
          <input type="text" placeholder="Digite sua Cidade" id="city" />

          <label htmlFor="state">Estado UF</label>
          <input type="text" placeholder="Digite seu Estado UF" id="state" />

          <label htmlFor="street">Rua / Logradouro</label>
          <input type="text" placeholder="Exemplo Rua..." id="street" />

          <label htmlFor="neighborhood">Bairro</label>
          <input
            type="text"
            placeholder="Exemplo Bairro..."
            id="neighborhood"
          />

          <label htmlFor="number">Número</label>
          <input type="text" placeholder="Exemplo Número..." id="number" />

          <label htmlFor="whatsapp">Whatsapp</label>
          <input type="text" placeholder="(00) 00000-0000" id="number" />

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
