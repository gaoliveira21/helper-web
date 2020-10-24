import React from 'react'

import Input from '../../../components/Input'
import Header from '../../../components/Header'

import {
  Form,
  Container,
  Fieldset,
  InputContent,
  ButtonContent
} from './styles'

function UpdatePassword () {
  return (
    <>
      <Header
        title='Alterar Senha'
        description='Confirme sua senha atual, Crie uma nova, Confirme sua nova senha e Pronto.'
        label='Alterar senha'
      />

      <Container>
        <Form>
          <Fieldset>
            <legend>Alteração de senha secreta</legend>
            <span />
            <InputContent>
              <Input
                width='100%'
                label='Senha secreta atual'
                name='oldPassword'
                type='password'
              />
            </InputContent>
            <InputContent>
              <Input
                width='100%'
                label='Nova senha secreta'
                name='newPassword'
                type='password'
              />
            </InputContent>
            <InputContent>
              <Input
                width='100%'
                label='Confirme sua nova senha secreta'
                name='newPassword'
                type='password'
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
