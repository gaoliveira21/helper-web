import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import { Container, TitleHeader, BackIcon, Mask } from './style'

function Header ({ title, description, label }) {
  const history = useHistory()

  function navigateBack () {
    history.goBack()
  }

  return (
    <Mask>
      <Container>
        <nav>
          <button type='button' onClick={navigateBack}>
            <BackIcon />
          Voltar
          </button>
          <strong>{label}</strong>
          <h3>Helper</h3>
        </nav>
        <TitleHeader>
          <div>
            <h1>{title}</h1>
            <div>
              <p>{description}</p>
            </div>
          </div>
        </TitleHeader>
      </Container>
    </Mask>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  label: PropTypes.string.isRequired
}

export default Header
