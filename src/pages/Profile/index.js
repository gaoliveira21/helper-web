import React from 'react'

import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Header from '../../components/Header'

import Dog from '../../assets/images/dog.jpg'

import {
  Form,
  SocialMedias,
  Container,
  ImageBlock,
  Profile,
  Fieldset,
  InputContent,
  ButtonContent,
  InputMedias,
  CheckIcon
} from './styles'

function NewCase () {
  return (
    <>
      <Header
        title='Perfil da Entidade'
        description='Este é o seu perfil, todas as informações aqui ficarão disponíveis para os doadores.'
        label='Perfil'
      />

      <Container>
        <Form>
          <Profile>
            <ImageBlock>
              <img src={Dog} alt='Profile' />
            </ImageBlock>
            <div>
              <h2>Nome da Entidade </h2>
              <strong>sigla da entidade</strong>
            </div>
          </Profile>
          <Fieldset>
            <legend>Dados da entidade</legend>
            <span />
            <InputContent>
              <Input
                width='60%'
                label='Nome da entidade'
                name='name'
                type='text'
              />
              <Input width='20%' label='Sigla' name='initials' type='text' />
              <Input width='20%' label='CNPJ' name='cnpj' type='text' />
            </InputContent>

            <InputContent>
              <Textarea label='Descreva sua entidade' name='description' />
            </InputContent>
          </Fieldset>

          <Fieldset>
            <legend>Localização</legend>
            <span />
            <InputContent>
              <Input
                width='80%'
                label='Rua / Logradouro'
                name='street'
                type='text'
              />
              <Input width='20%' label='Nº' name='number' type='text' />
            </InputContent>

            <InputContent>
              <Input
                width='50%'
                label='Bairro'
                name='neighborhood'
                type='text'
              />
              <Input width='30%' label='Cidade' name='city' type='text' />
              <Input width='20%' label='UF' name='state' type='text' />
            </InputContent>
          </Fieldset>

          <Fieldset>
            <legend>Contato</legend>
            <span />
            <InputContent>
              <Input
                width='100%'
                label='WhatsApp'
                name='whatsapp'
                type='text'
              />
            </InputContent>
          </Fieldset>
          <ButtonContent>
            <button type='submit'>Atualizar Perfil</button>
          </ButtonContent>
        </Form>

        <SocialMedias>
          <Fieldset>
            <legend>Redes Sociais</legend>
            <span />
            <InputContent>
              <InputMedias>
                <Input
                  width='100%'
                  label='Facebook'
                  name='socialmedia'
                  type='text'
                />
                <button>
                  <CheckIcon />
                </button>
              </InputMedias>
              <InputMedias>
                <Input
                  width='100%'
                  label='Instagram'
                  name='socialmedia'
                  type='text'
                />
                <button>
                  <CheckIcon />
                </button>
              </InputMedias>
            </InputContent>
          </Fieldset>
        </SocialMedias>

        <Form>
          <Fieldset>
            <legend>Dados de autenticação</legend>
            <span />
            <InputContent>
              <Input
                width='100%'
                label='E-mail'
                name='email'
                type='text'
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

export default NewCase
