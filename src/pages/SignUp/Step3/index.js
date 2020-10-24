import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useAuth } from '../../../contexts/auth'

import Input from '../../../components/Input'
import Textarea from '../../../components/Textarea'

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
  cnpj: Yup.string(),
  initials: Yup.string(),
  description: Yup.string()
})

function Step3 () {
  const history = useHistory()
  const { signUp } = useAuth()

  async function handleSubmit (values) {
    const entityDataStoraged = JSON.parse(window.localStorage.getItem('@helper:step1:user'))
    const profileDataStoraged = JSON.parse(window.localStorage.getItem('@helper:step2:user'))

    entityDataStoraged.password = window.atob(entityDataStoraged.password)

    await signUp({
      entity: entityDataStoraged,
      profile: Object.assign(values, profileDataStoraged)
    })

    history.push('/sign-up/success')
  }

  function getInitialValues () {
    return {
      cnpj: '',
      initials: '',
      description: ''
    }
  }

  const formik = useFormik({
    initialValues: getInitialValues(),
    validationSchema: schema,
    onSubmit: (values) => {
      handleSubmit(values)
    }
  })

  useEffect(() => {
    const storagedUserStep2 = window.localStorage.getItem('@helper:step2:user')

    if (!storagedUserStep2) {
      history.push('/sign-up/step2')
    }
  })

  return (
    <Container>
      <FormContent>
        <h3>Helper</h3>
        <Content>
          <Link to='/sign-up/step2'>
            <BackIcon />
            Voltar
          </Link>
          <div>
            <h1>Crie seu Perfil</h1>
            <p>Preencha os campos abaixo para começar a criação do seu perfil.</p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <strong>Informações sobre a entidade</strong>
            <InputBlock>
              <Input
                width='70%'
                type='text'
                name='cnpj'
                label='CNPJ'
                placeholder='Digite seu CNPJ'
                value={formik.values.cnpj}
                onChange={formik.handleChange}
                formik={formik}
              />
              <Input
                width='30%'
                type='text'
                name='initials'
                label='Sigla'
                placeholder='Digite a sigla da entidade'
                value={formik.values.initials}
                onChange={formik.handleChange}
                formik={formik}
              />
            </InputBlock>
            <InputBlock>
              <Textarea
                name='description'
                label='Breve descrição da entidade'
                value={formik.values.description}
                onChange={formik.handleChange}
                formik={formik}
              />
            </InputBlock>
            <ButtonContent>
              <button type='submit'>Concluir</button>
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

export default Step3
