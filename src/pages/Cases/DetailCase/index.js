import React, { useEffect, useState, useMemo } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'

import { formatDate, formatPrice } from '../../../util/format'

import api from '../../../services/api'

import {
  Content,
  Container,
  TextContent,
  ButtonContent,
  ValueCollected,
  Title,
  Progress,
  TableDonators,
  Preview,
  PreviewContent,
  EditIcon,
  Loading,
  Scroll
} from './styles'

import Header from '../../../components/Header'
import Text from '../../../components/Text'

function DetailCase () {
  const [caseDetail, setCaseDetail] = useState({})
  const history = useHistory()
  const { id } = useParams()

  const formattedValueCollected = useMemo(
    () => formatPrice(caseDetail.value_collected),
    [caseDetail.value_collected]
  )

  const formattedValue = useMemo(() => formatPrice(caseDetail.value), [
    caseDetail.value
  ])

  const formattedDate = useMemo(() => formatDate(caseDetail.createdAt), [
    caseDetail.createdAt
  ])

  useEffect(() => {
    async function loadCase () {
      try {
        const response = await api.get(`/entities/cases/${id}`)

        setCaseDetail(response.data)
      } catch (error) {
        history.push('/404')
      }
    }

    loadCase()
  }, [id, history])

  return (
    <>
      <Header
        title={`${caseDetail.title}`}
        description=''
        label='Detalhes do caso'
      />

      <Container>
        <Content>
          {Object.keys(caseDetail).length === 0 ? (
            <Loading />
          ) : (
            <>
              <ButtonContent>
                <Link to={`/cases/update-case/${caseDetail.id}`}>
                  <button type='button'>
                    <EditIcon />
                    Editar caso
                  </button>
                </Link>
              </ButtonContent>

              <TextContent>
                <Text
                  width='100%'
                  title='Título do caso'
                  text={caseDetail.title}
                />
              </TextContent>

              <TextContent>
                <Text
                  width='100%'
                  title='Valor estimado'
                  text={formattedValue}
                />
              </TextContent>

              <TextContent>
                <Text
                  width='100%'
                  title='Data de Criação'
                  text={formattedDate}
                />
              </TextContent>

              <TextContent>
                <Text
                  width='100%'
                  title='Descrição do caso'
                  text={caseDetail.description}
                />
              </TextContent>

              {caseDetail.files.length !== 0 && (
                // O nome não tem haver
                <ValueCollected>
                  <Title>
                    <strong>Imagens do caso</strong>
                    <span>{caseDetail.files.length} / 4</span>
                  </Title>
                  <PreviewContent>
                    <Preview>
                      {caseDetail.files.map((file) => {
                        return <div key={file.id}><img width='100' src={file.url} alt='Imagens do caso' /></div>
                      })}
                    </Preview>
                  </PreviewContent>
                </ValueCollected>
              )}

              <ValueCollected>
                <Title>
                  <strong>Total Arrecadado</strong>
                  <span>{`${formattedValueCollected} / ${formattedValue}`}</span>
                </Title>
                <Progress
                  percent={Math.ceil(
                    (caseDetail.value_collected / caseDetail.value) * 100
                  )}
                >
                  <div>
                    <strong>{formattedValueCollected}</strong>
                  </div>
                </Progress>
              </ValueCollected>

              <Scroll>
                <TableDonators cellSpacing='0'>
                  <caption>Doadores que ajudaram nesse caso</caption>
                  <thead>
                    <tr>
                      <th>Usuário</th>
                      <th>Doação</th>
                      <th>Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    {caseDetail?.donations.length === 0 && (
                      <tr>
                        <td
                          colSpan={4} style={{
                            height: '50px'
                          }}
                        >
                        Você ainda não recebeu doações
                        </td>
                      </tr>
                    )}

                    {caseDetail?.donations &&
                        caseDetail?.donations.map((donation) => (
                          <tr key={donation.id}>
                            <td>{donation.donator?.full_name || 'Anônimo'}</td>
                            <td>{formatPrice(donation.value)}</td>
                            <td>{formatDate(donation.createdAt)}</td>
                          </tr>
                        ))}
                  </tbody>
                </TableDonators>
              </Scroll>
            </>
          )}
        </Content>
      </Container>
    </>
  )
}

export default DetailCase
