import React from 'react'
import { useAuth } from '../../../contexts/auth'

import { Container, ImageContent, Content, CheckIcon } from './styles'

import finishRegister from '../../../assets/images/finishRegister.svg'

function Success () {
  const { successSignUp } = useAuth()

  return (
    <Container>
      <Content>
        <CheckIcon />
        <h1>Cadastro concluído com sucesso!</h1>
        <button type='button' onClick={successSignUp}>Acessar o sistema</button>
      </Content>
      <ImageContent>
        <h3>Helper</h3>
        <img src={finishRegister} alt='Cadastre-se' />
      </ImageContent>
    </Container>
  )
}

export default Success
