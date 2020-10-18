import React from 'react'

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

function Step1 () {
  return (
    <Container>
      <FormContent>
        <h3>Helper</h3>
        <Content>
          <a href='#!'>
            <BackIcon />
            Voltar
          </a>
          <div>
            <h1>Cadastrar-se</h1>
            <p>Preencha os campos abaixo para efetuar o cadastro</p>
          </div>
          <form>
            <InputBlock>
              <Input
                width='100%'
                type='text'
                name='name'
                label='Nome da entidade'
                placeholder='Digite o nome da entidade'
              />
            </InputBlock>
            <InputBlock>
              <Input
                width='100%'
                type='text'
                name='email'
                label='E-mail'
                placeholder='Digite seu e-mail'
              />
            </InputBlock>
            <InputBlock>
              <Input
                width='100%'
                type='password'
                name='password'
                label='Senha'
                placeholder='Digite sua senha'
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
