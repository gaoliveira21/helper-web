import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

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

function Step2 () {
  const history = useHistory()

  useEffect(() => {
    const storagedUserStep1 = window.localStorage.getItem('@helper:step1:user')

    if (!storagedUserStep1) {
      history.push('/sign-up/step1')
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
            <h1>Cadastrar-se</h1>
            <p>Preencha os campos abaixo para efetuar o cadastro</p>
          </div>
          <form>
            <strong>Endereço</strong>
            <InputBlock>
              <Input
                width='60%'
                type='text'
                name='city'
                label='Cidade'
                placeholder='Digite a sua cidade'
              />
              <Input
                width='40%'
                type='text'
                name='state'
                label='UF'
                placeholder='Digite seu estado UF'
              />
            </InputBlock>
            <InputBlock>
              <Input
                width='100%'
                type='text'
                name='neighborhood'
                label='Bairro'
                placeholder='Exemplo: Bairro da sua entidade'
              />
            </InputBlock>
            <InputBlock>
              <Input
                width='80%'
                type='text'
                name='street'
                label='Rua'
                placeholder='Exemplo: Rua da sua entidade'
              />
              <Input
                width='20%'
                type='text'
                name='number'
                label='Nº'
                placeholder='Nº'
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
