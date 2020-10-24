import React from 'react'

import Input from '../../../components/Input'
import Textarea from '../../../components/Textarea'

import {
  Form,
  Container,
  InputContent,
  Dropzone,
  ButtonContent
} from './styles'

import Header from '../../../components/Header'

function NewCase () {
  return (
    <>
      <Header
        title='NOME DO CASO [EXEMPLO]'
        description='Aqui você pode editar o seu caso, fazendo todas alterações necessárias.'
        label='Editar caso'
      />

      <Container>
        <Form>
          <InputContent>
            <Input
              width='70%'
              label='Título do caso'
              name='title'
              type='text'
            />
            <Input
              width='30%'
              label='Valor do caso R$'
              name='value'
              type='text'
            />
          </InputContent>
          <InputContent>
            <Textarea label='Descrição do caso' name='description' />
          </InputContent>
          <InputContent>
            <Dropzone>
              <label htmlFor='images'>Adicionar imagens ao caso</label>
              <div>Dropzone</div>
            </Dropzone>
          </InputContent>
          <ButtonContent>
            <button type='submit'>Editar caso</button>
          </ButtonContent>
        </Form>
      </Container>
    </>
  )
}

export default NewCase
