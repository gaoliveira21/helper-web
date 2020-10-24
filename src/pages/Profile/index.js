import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/auth'

import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Header from '../../components/Header'

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
  UpdatePassword,
  CheckIcon,
  EditIcon
} from './styles'

const schema = Yup.object().shape({
  initials: Yup.string(),
  cnpj: Yup.string(),
  description: Yup.string().max(300, 'O campo descrição precisa ter no máximo 300 caracteres'),
  street: Yup.string(),
  number: Yup.number('O campo número precisa ser um número válido').positive('O campo número precisa ser um valor positivo'),
  neighborhood: Yup.string(),
  city: Yup.string(),
  state: Yup.string().length(2, 'O campo UF precisa ter 2 caracteres'),
  whatsapp: Yup
    .string()
    .required('O campo whatsapp é obrigatório')
})

function NewCase () {
  const { user, changeAvatar, editProfile } = useAuth()
  const [avatar, setAvatar] = useState(user.profile.avatar)

  const profileFormik = useFormik({
    initialValues: {
      initials: user.profile.initials || '',
      cnpj: user.profile.cnpj || '',
      description: user.profile.description || '',
      street: user.profile.street || '',
      number: user.profile.number || '',
      neighborhood: user.profile.neighborhood || '',
      city: user.profile.city || '',
      state: user.profile.state || '',
      whatsapp: user.profile.whatsapp
    },
    validationSchema: schema,
    onSubmit: (values) => {
      editProfile(values)
    }
  })

  async function handleChangeAvatar (e) {
    const avatar = await changeAvatar(e.target.files[0])
    setAvatar(avatar)
  }

  return (
    <>
      <Header
        title='Perfil da Entidade'
        description='Este é o seu perfil, todas as informações aqui ficarão disponíveis para os doadores.'
        label='Perfil'
      />

      <Container>
        <Form onSubmit={profileFormik.handleSubmit}>
          <Profile>
            <ImageBlock htmlFor='avatar'>
              <img
                src={
                  avatar.url ||
                'https://img.estadao.com.br/fotos/crop/1200x1200/resources/jpg/5/5/1553173579355.jpg'
                } alt='Profile'
              />
            </ImageBlock>
            <div>
              <h2>Nome da Entidade </h2>
              <strong>sigla da entidade</strong>
            </div>
            <input type='file' name='avatar' id='avatar' onChange={handleChangeAvatar} />
          </Profile>
          <Fieldset>
            <legend>Dados da entidade</legend>
            <span />
            <InputContent>
              <Input
                width='50%'
                label='Sigla'
                name='initials'
                type='text'
                value={profileFormik.values.initials}
                onChange={profileFormik.handleChange}
                formik={profileFormik}
              />
              <Input
                width='50%'
                label='CNPJ'
                name='cnpj'
                type='text'
                value={profileFormik.values.cnpj}
                onChange={profileFormik.handleChange}
                formik={profileFormik}
              />
            </InputContent>

            <InputContent>
              <Textarea
                label='Descreva sua entidade'
                name='description'
                value={profileFormik.values.description}
                onChange={profileFormik.handleChange}
                formik={profileFormik}
              />
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
                value={profileFormik.values.street}
                onChange={profileFormik.handleChange}
                formik={profileFormik}
              />
              <Input
                width='20%'
                label='Nº'
                name='number'
                type='text'
                value={profileFormik.values.number}
                onChange={profileFormik.handleChange}
                formik={profileFormik}
              />
            </InputContent>

            <InputContent>
              <Input
                width='50%'
                label='Bairro'
                name='neighborhood'
                type='text'
                value={profileFormik.values.neighborhood}
                onChange={profileFormik.handleChange}
                formik={profileFormik}
              />
              <Input
                width='30%'
                label='Cidade'
                name='city'
                type='text'
                value={profileFormik.values.city}
                onChange={profileFormik.handleChange}
                formik={profileFormik}
              />
              <Input
                width='20%'
                label='UF'
                name='state'
                type='text'
                value={profileFormik.values.state}
                onChange={profileFormik.handleChange}
                formik={profileFormik}
              />
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
                value={profileFormik.values.whatsapp}
                onChange={profileFormik.handleChange}
                formik={profileFormik}
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
            <legend>Dados da Entidade</legend>
            <span />
            <InputContent>
              <Input
                width='100%'
                label='Nome da entidade'
                name='name'
                type='text'
              />
            </InputContent>
            <InputContent>
              <Input
                width='100%'
                label='E-mail'
                name='email'
                type='text'
              />
            </InputContent>
            <UpdatePassword>
              <Link to='/profile/update-password'>Alterar senha <EditIcon /></Link>
            </UpdatePassword>
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
