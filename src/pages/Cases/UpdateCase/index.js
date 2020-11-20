import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'
import { toast } from 'react-toastify'

import api from '../../../services/api'

import Input from '../../../components/Input'
import Textarea from '../../../components/Textarea'
import FilePreview from '../../../components/FilePreview'

import {
  Form,
  Container,
  InputContent,
  ButtonContent,
  Dropzone,
  Preview,
  PreviewContent
} from './styles'

import Header from '../../../components/Header'

function UpdateCase () {
  const [caseData, setCaseData] = useState({})
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [files, setFiles] = useState([])
  const [removedFiles, setRemovedFiles] = useState([])

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
        console.log(error)
        history.push('/404')
      }
    }

    loadCase()
  }, [history, params.id])

  function handleRemoveFile (id, preview = null) {
    if (!preview) {
      const removedFile = files.find(file => file.id === id)
      setRemovedFiles([...removedFiles, removedFile])

      const newFiles = files.filter(file => file.id !== id)
      setFiles(newFiles)
    } else {
      const newFiles = files.filter(file => file.preview !== preview)
      setFiles(newFiles)
    }
  }

  async function handleSubmit (e) {
    try {
      e.preventDefault()
      await api.put(`/entities/cases/${params.id}`, { title, description })
      removedFiles.forEach(async (file) => {
        await api.delete(`/cases/${params.id}/files/${file.id}`)
      })

      const newFiles = files.filter(file => !file.id)

      if (newFiles.length > 0) {
        newFiles.forEach(async (file) => {
          const formData = new window.FormData()
          formData.append('file', file)
          await api.post(`/cases/${params.id}/files`, formData)
        })
      }

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

          <Dropzone>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <small>Clique aqui ou arraste para inserir ou excluir as imagens para o seu caso</small>
            </div>
          </Dropzone>
          <PreviewContent>
            <Preview>
              {files.map(file => (
                <FilePreview key={file.id || file.preview} file={file} remove={() => handleRemoveFile(file.id, file.preview || null)} />
              ))}
            </Preview>
          </PreviewContent>
          <ButtonContent>
            <button type='submit'>Editar caso</button>
          </ButtonContent>
        </Form>
      </Container>
    </>
  )
}

export default UpdateCase
