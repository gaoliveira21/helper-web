import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'
import { toast } from 'react-toastify'

import api from '../../../services/api'

import Input from '../../../components/Input'
import Textarea from '../../../components/Textarea'

import {
  Form,
  Container,
  InputContent,
  ButtonContent
} from './styles'

import Header from '../../../components/Header'

function UpdateCase () {
  const [caseData, setCaseData] = useState({})
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [files, setFiles] = useState([])

  const history = useHistory()
  const params = useParams()

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    maxFiles: 4,
    onDrop: acceptedFiles => {
      setFiles([...files, ...acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))])
    }
  })

  useEffect(() => {
    async function loadCase () {
      try {
        const response = await api.get(`/entities/cases/${params.id}`)

        setCaseData(response.data)
        setFiles(response.data.files)
        setTitle(response.data.title)
        setDescription(response.data.description)
      } catch (error) {
        history.push('/404')
      }
    }

    loadCase()
  }, [])

  async function handleSubmit (e) {
    try {
      e.preventDefault()
      await api.put(`/entities/cases/${params.id}`, { title, description })
      toast.success('Caso atualizado com sucesso!')
    } catch (error) {
      toast.error('Falha ao atualizar caso, tente novamente')
    }
  }

  return (
    <>
      <Header
        title={caseData.title || ''}
        description='Aqui você pode editar o seu caso, fazendo todas alterações necessárias.'
        label='Editar caso'
      />

      <Container>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <InputContent>
            <Input
              width='100%'
              label='Título do caso'
              name='title'
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputContent>
          <InputContent>
            <Textarea
              label='Descrição do caso'
              name='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </InputContent>
          <InputContent>
            <div>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <small>Clique aqui ou arraste para inserir imagens para o seu caso</small>
              </div>
            </div>
          </InputContent>
          <ButtonContent>
            <button type='submit'>Editar caso</button>
          </ButtonContent>
        </Form>
      </Container>
    </>
  )
}

export default UpdateCase
