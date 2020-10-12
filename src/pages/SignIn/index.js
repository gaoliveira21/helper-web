import React from 'react';
import { useFormik } from 'formik';

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

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      signIn(values);
    },
  });

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
          <form onSubmit={formik.handleSubmit}>
            <InputBlock>
              <Input
                width="100%"
                type="text"
                name="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </InputBlock>
            <InputBlock>
              <Input
                width="100%"
                type="password"
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                value={formik.values.password}
                onChange={formik.handleChange}
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
