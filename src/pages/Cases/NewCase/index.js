import React from 'react'
import { useHistory } from 'react-router-dom'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'

import api from '../../../services/api'

import Input from '../../../components/Input'
import Textarea from '../../../components/Textarea'
import Header from '../../../components/Header'

import {
  Form,
  Container,
  InputContent,
  Dropzone,
  ButtonContent
} from './styles'

const schema = Yup.object().shape({
  title: Yup.string()
    .min(6, 'O título precisa ter no mínimo 3 caracteres')
    .required('Insira o título do caso'),
  value: Yup.number()
    .positive()
    .min(5, 'Valor minímo preciso ser de 5 reais')
    .required('Insira o valor do caso'),
  description: Yup.string().required('Insira uma breve descrição')
})

function NewCase () {
  const history = useHistory()

  function handleSubmit ({ title, value, description }) {
    try {
      api.post('/cases', {
        title,
        value,
        description
      })

      history.push('/dashboard')
    } catch (error) {
      toast.error('Erro ao cadastrar um novo caso')
    }
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      value: '',
      description: ''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      handleSubmit(values)
    }
  })

  return (
    <>
      <Header
        title='Cadastrar novo caso'
        description='Crie um novo caso para receber doações!'
        label='Casos'
      />

      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <InputContent>
            <Input
              width='70%'
              label='Título do caso'
              name='title'
              type='text'
              placeholder='Digite o título do caso'
              value={formik.values.title}
              onChange={formik.handleChange}
              formik={formik}
            />
            <Input
              width='30%'
              label='Valor do caso R$'
              name='value'
              type='text'
              placeholder='Digite o valor do caso'
              value={formik.values.value}
              onChange={formik.handleChange}
              formik={formik}
            />
          </InputContent>
          <InputContent>
            <Textarea
              label='Descrição do caso'
              name='description'
              placeholder='Faça uma breve descrição do caso'
              value={formik.values.description}
              onChange={formik.handleChange}
              formik={formik}
            />
          </InputContent>
          <InputContent>
            <Dropzone>
              <label htmlFor='images'>Adicionar imagens ao caso</label>
              <div>Dropzone</div>
            </Dropzone>
          </InputContent>
          <ButtonContent>
            <button type='submit'>Cadastrar</button>
          </ButtonContent>
        </Form>
      </Container>
    </>
  )
}

export default NewCase
