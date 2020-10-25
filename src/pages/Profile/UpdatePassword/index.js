import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

import api from '../../../services/api'

import Input from '../../../components/Input'
import Header from '../../../components/Header'

import {
  Form,
  Container,
  Fieldset,
  InputContent,
  ButtonContent
} from './styles'

const schema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(6, 'O campo senha precisa ter no minimo 6 caracteres')
    .required('O campo senha secreta atual é obrigatório'),
  password: Yup.string()
    .min(6, 'O campo senha precisa ter no minimo 6 caracteres')
    .required('O campo Nova senha é obrigatório'),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
        .required('O campo confirmar senha é obrigatorio')
        .oneOf([Yup.ref('password')], 'O campo confirmar senha e nova senha precisam ser iguais')
      : field
  )
})

function UpdatePassword () {
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      await handleSubmit(values)
    }
  })

  async function handleSubmit (values) {
    try {
      await api.put('/entities', values)
      toast.success('Senha atualizada com sucesso')
      history.push('/profile')
    } catch (error) {
      toast.error('Falha ao alterar senha, verifique seus dados')
    }
  }

  return (
    <>
      <Header
        title='Alterar Senha'
        description='Confirme sua senha atual, Crie uma nova, Confirme sua nova senha e Pronto.'
        label='Alterar senha'
      />

      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <Fieldset>
            <legend>Alteração de senha secreta</legend>
            <span />
            <InputContent>
              <Input
                width='100%'
                label='Senha secreta atual'
                name='oldPassword'
                type='password'
                value={formik.values.oldPassword}
                onChange={formik.handleChange}
                formik={formik}
              />
            </InputContent>
            <InputContent>
              <Input
                width='100%'
                label='Nova senha secreta'
                name='password'
                type='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                formik={formik}
              />
            </InputContent>
            <InputContent>
              <Input
                width='100%'
                label='Confirme sua nova senha secreta'
                name='confirmPassword'
                type='password'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                formik={formik}
              />
            </InputContent>
          </Fieldset>
          <ButtonContent>
            <button type='submit'>Atualizar</button>
          </ButtonContent>
        </Form>
      </Container>
    </>
  )
}

export default UpdatePassword
