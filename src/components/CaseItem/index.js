import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'

import { formatPrice, formatDate } from '../../util/format'

import CaseStatusBadge from '../CaseStatusBadge'

import {
  Container,
  EditIcon,
  Progress,
  Header,
  Body,
  ActionBox
} from './styles'

function CaseItem ({ data }) {
  const history = useHistory()

  const formattedDate = useMemo(() => formatDate(data.createdAt), [
    data.createdAt
  ])

  const formattedValueCollected = useMemo(
    () => formatPrice(data.value_collected),
    [data.value_collected]
  )

  const formattedValue = useMemo(() => formatPrice(data.value), [data.value])

  const formattedDescription = useMemo(() => {
    if (data.description.length > 100) {
      return `${data.description.match(/^.{1,97}/)[0]}...`
    }

    return data.description
  }, [data.description])

  function handleNavigateToEdit () {
    history.push('/cases/update-case')
  }

  return (
    <Container>
      <Progress percent={Math.ceil((data.value_collected / data.value) * 100)}>
        <div>
          <strong>{formattedValueCollected}</strong>
        </div>
      </Progress>
      <Header>
        <span>{formattedDate}</span>
        <strong>{formattedValue}</strong>
      </Header>
      <Body>
        <h3>{data.title}</h3>
        <CaseStatusBadge opened={data.opened} />
        <p>{formattedDescription}</p>
      </Body>
      <ActionBox>
        <Link to={`/cases/detail-case/${data.id}`}>Detalhes</Link>
        <EditIcon onClick={() => handleNavigateToEdit()} />
      </ActionBox>
    </Container>
  )
}

CaseItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    opened: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
    value_collected: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired
  }).isRequired
}

export default CaseItem
