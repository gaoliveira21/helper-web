import React, { useEffect } from 'react'
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
  city: Yup.string(),
  state: Yup.string().length(2, 'O campo UF precisa ter 2 caracteres').matches(/^[A-Z]{2}$/g, 'UF precisa ser maiúsculo'),
  neighborhood: Yup.string(),
  street: Yup.string(),
  number: Yup.string(),
  whatsapp: Yup.string()
    .matches(/\d{11}/g, 'O campo whatsapp precisa ter 11 números')
    .required('O campo whatsapp é obrigatório')
})

function Step2 () {
  const history = useHistory()

  useEffect(() => {
    const storagedUserStep1 = window.localStorage.getItem('@helper:step1:user')

    if (!storagedUserStep1) {
      history.push('/sign-up/step1')
    }
  })

  function handleSubmit (values) {
    window.localStorage.setItem('@helper:step2:user', JSON.stringify(values))
    history.push('/sign-up/step3')
  }

  function getInitialValues () {
    const storagedUser = window.localStorage.getItem('@helper:step2:user')

    if (storagedUser) {
      return JSON.parse(storagedUser)
    }

    return {
      city: '',
      state: '',
      neighborhood: '',
      street: '',
      number: '',
      whatsapp: ''
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
          <Link to='/sign-up/step1'>
            <BackIcon />
            Voltar
          </Link>
          <div>
            <h1>Perfil da Entidade</h1>
            <p>Preencha os campos abaixo para começar a criação do seu perfil.</p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <strong>Endereço</strong>
            <InputBlock>
              <Input
                width='60%'
                type='text'
                name='city'
                label='Cidade'
                placeholder='Digite a sua cidade'
                value={formik.values.city}
                onChange={formik.handleChange}
                formik={formik}
              />
              <Input
                width='40%'
                type='text'
                name='state'
                label='UF'
                placeholder='Digite seu estado UF'
                value={formik.values.state}
                onChange={formik.handleChange}
                formik={formik}
              />
            </InputBlock>
            <InputBlock>
              <Input
                width='100%'
                type='text'
                name='neighborhood'
                label='Bairro'
                placeholder='Exemplo: Bairro da sua entidade'
                value={formik.values.neighborhood}
                onChange={formik.handleChange}
                formik={formik}
              />
            </InputBlock>
            <InputBlock>
              <Input
                width='80%'
                type='text'
                name='street'
                label='Rua'
                placeholder='Exemplo: Rua da sua entidade'
                value={formik.values.street}
                onChange={formik.handleChange}
                formik={formik}
              />
              <Input
                width='20%'
                type='text'
                name='number'
                label='Nº'
                placeholder='Nº'
                value={formik.values.number}
                onChange={formik.handleChange}
                formik={formik}
              />
            </InputBlock>
            <strong>Contato</strong>
            <InputBlock>
              <Input
                width='100%'
                type='text'
                name='whatsapp'
                label='Whatsapp'
                placeholder='Digite seu whatsapp'
                value={formik.values.whatsapp}
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

export default Step2
