import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('O campo email é obrigatório'),
  password: Yup.string()
    .min(6, 'O campo senha precisa ter no mínimo 6 caracteres')
    .required('O campo senha é obrigatório'),
});

function SignIn() {
  const { signIn } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
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
                type="email"
                name="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </InputBlock>
            {formik.touched.email && formik.errors.email ? (
              <small>{formik.errors.email}</small>
            ) : null}
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
            {formik.touched.password && formik.errors.password ? (
              <small>{formik.errors.password}</small>
            ) : null}
            <ButtonContent>
              <button type="submit">Próximo</button>
            </ButtonContent>
          </form>

          <footer>
            <small>Não tem conta?</small>
            <Link to="/sign-up/step1">Cadastre-se agora mesmo</Link>
          </footer>
        </Content>
      </FormContent>
    </Container>
  );
}

export default SignIn;
