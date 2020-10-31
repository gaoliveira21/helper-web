import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'

import api from '../../../services/api'

import Input from '../../../components/Input'
import Textarea from '../../../components/Textarea'
import Header from '../../../components/Header'
import FilePreview from '../../../components/FilePreview'

import {
  Form,
  Container,
  InputContent,
  Dropzone,
  ButtonContent,
  Preview,
  PreviewContent
} from './styles'

const schema = Yup.object().shape({
  title: Yup.string()
    .min(6, 'O título precisa ter no mínimo 3 caracteres')
    .max(25, 'O título não pode ultrapassar 25 caracteres')
    .required('Insira o título do caso'),
  value: Yup.string()
    .matches(/\d{1,5}/g, 'O valor deve ser um número')
    .required('Insira o valor do caso'),
  description: Yup.string().required('Insira uma breve descrição')
})

function NewCase () {
  const history = useHistory()

  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    maxFiles: 4,
    onDrop: acceptedFiles => {
      setFiles([...files, ...acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))])
    }
  })

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview))
  }, [files])

  async function handleSubmit ({ title, value, description }) {
    try {
      const response = await api.post('/cases', {
        title,
        value,
        description
      })

      const { id } = response.data

      files.forEach(async (file) => {
        const formData = new window.FormData()
        formData.append('file', file)

        await api.post(`cases/${id}/files`, formData)
      })

      history.push('/cases')
    } catch (error) {
      toast.error('Erro ao cadastrar um novo caso')
    }
  }

  function handleRemoveFile (preview) {
    const updatedFilesList = files.filter(file => file.preview !== preview)

    setFiles(updatedFilesList)
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
        title='Cadastrar um novo caso'
        description='Crie um caso da sua entidade e comece a receber doações!'
        label='Novo caso'
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
          <Dropzone>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <small>Clique aqui ou arraste para inserir imagens para o seu caso</small>
            </div>
          </Dropzone>
          <PreviewContent>
            <Preview>
              {files.map(file => (
                <FilePreview key={file.preview} file={file} remove={handleRemoveFile} />
              ))}
            </Preview>
          </PreviewContent>
          <ButtonContent>
            <button type='submit'>Cadastrar</button>
          </ButtonContent>
        </Form>
      </Container>
    </>
  )
}

export default NewCase
