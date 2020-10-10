import React from 'react';

import Input from '../../../components/Input';

import {
  Container,
  ImageContent,
  Title,
  Image,
  FormContent,
  InputBlock,
} from './styles';

import registerImage from '../../../assets/images/register.svg';

function SignIn() {
  return (
    <Container>
      <FormContent>
        <h3>Helper</h3>
        <h1>Cadastrar-se</h1>
        <p>Preencha os campos abaixo para efetuar o cadastro</p>
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
