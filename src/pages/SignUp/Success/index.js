import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../../contexts/auth'

import { Container, ImageContent, Content, CheckIcon } from './styles'

import finishRegister from '../../../assets/images/finishRegister.svg'

function Success () {
  const { successSignUp } = useAuth()
  const history = useHistory()

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('@helper:user'))

    if (!user) history.push('/sign-up/step1')
  }, [history])

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
