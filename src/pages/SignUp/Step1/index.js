import React from 'react'
import { Link, useHistory } from 'react-router-dom'
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
  const history = useHistory()

  function handleSubmit ({ email, name, password }) {
    const values = {
      email,
      name,
      password: window.btoa(password)
    }

    window.localStorage.setItem('@helper:step1:user', JSON.stringify(values))
    history.push('/sign-up/step2')
  }

  function getInitialValues () {
    const user = window.localStorage.getItem('@helper:step1:user')

    if (user) {
      const storageUser = JSON.parse(user)
      storageUser.password = window.atob(storageUser.password)
      return storageUser
    }

    return {
      name: '',
      email: '',
      password: ''
    }
  }

  const formik = useFormik({
    initialValues: getInitialValues(),
    validationSchema: schema,
    onSubmit: (values) => {
      handleSubmit(values)
    }
  })

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
          <form onSubmit={formik.handleSubmit}>
            <InputBlock>
              <Input
                width='100%'
                type='text'
                name='name'
                label='Nome da entidade'
                placeholder='Digite o nome da entidade'
                value={formik.values.name}
                onChange={formik.handleChange}
                formik={formik}
              />
            </InputBlock>
            <InputBlock>
              <Input
                width='100%'
                type='text'
                name='email'
                label='E-mail'
                placeholder='Digite seu e-mail'
                value={formik.values.email}
                onChange={formik.handleChange}
                formik={formik}
              />
            </InputBlock>
            <InputBlock>
              <Input
                width='100%'
                type='password'
                name='password'
                label='Senha'
                placeholder='Digite sua senha'
                value={formik.values.password}
                onChange={formik.handleChange}
                formik={formik}
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
