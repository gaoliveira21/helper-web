import React from 'react'
import PropTypes from 'prop-types'

import { Badge } from './styles'

function CaseStatusBadge ({ opened }) {
  return <Badge opened={opened}>{opened ? 'Aberto' : 'Concluído'}</Badge>
}

CaseStatusBadge.propTypes = {
  opened: PropTypes.bool.isRequired
}

export default CaseStatusBadge
