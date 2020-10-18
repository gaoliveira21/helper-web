import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Input from '../../../components/Input'

import {
  Container,
  ImageContent,
  Content,
  FormContent,
  InputBlock,
  ButtonContent,
  BackIcon
} from './styles'

import registerImage from '../../../assets/images/register.svg'

const schema = Yup.object().shape({
  name: Yup.string().required('O campo nome é obrigatório'),
  email: Yup.string().email('Email invalido').required('O campo email é obrigatório'),
  password: Yup
    .string()
    .min(6, 'A senha precisa ser no minimo de 6 caracteres')
    .required('O campo senha é obrigatorio')
})

function Step1 () {
  return (
    <Container>
      <FormContent>
        <h3>Helper</h3>
        <Content>
          <Link to='/sign-in'>
            <BackIcon />
            Voltar
          </Link>
          <div>
            <h1>Cadastrar-se</h1>
            <p>Preencha os campos abaixo para efetuar o cadastro</p>
          </div>
          <form>
            <InputBlock>
              <Input
                width='100%'
                type='text'
                name='name'
                label='Nome da entidade'
                placeholder='Digite o nome da entidade'
              />
            </InputBlock>
            <InputBlock>
              <Input
                width='100%'
                type='text'
                name='email'
                label='E-mail'
                placeholder='Digite seu e-mail'
              />
            </InputBlock>
            <InputBlock>
              <Input
                width='100%'
                type='password'
                name='password'
                label='Senha'
                placeholder='Digite sua senha'
              />
            </InputBlock>
            <ButtonContent>
              <button type='submit'>Próximo</button>
            </ButtonContent>
          </form>
        </Content>
      </FormContent>

      <ImageContent>
        <h3>Helper</h3>
        <img src={registerImage} alt='Cadastre-se' />
      </ImageContent>
    </Container>
  )
}

export default Step1
