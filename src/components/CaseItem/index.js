import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

import CaseStatusBadge from '../CaseStatusBadge';

import {
  Container,
  EditIcon,
  Progress,
  Header,
  Body,
  ActionBox,
} from './styles';

function CaseItem({ data }) {
  const history = useHistory();

  function handleNavigateToEdit() {
    history.push('/cases/update-case');
  }

  return (
    <Container>
      <Progress percent={Math.ceil((data.value_collected / data.value) * 100)}>
        <div>
          <strong>{data.formattedValueCollected}</strong>
        </div>
      </Progress>
      <Header>
        <span>{data.formattedDate}</span>
        <strong>{data.formattedValue}</strong>
      </Header>
      <Body>
        <h3>{data.title}</h3>
        <CaseStatusBadge opened={data.opened} />
        <p>{data.description}</p>
      </Body>
      <ActionBox>
        <Link to="/cases/detail-case">Detalhes</Link>
        <EditIcon onClick={() => handleNavigateToEdit()} />
      </ActionBox>
    </Container>
  );
}

CaseItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    opened: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
    formattedValue: PropTypes.string.isRequired,
    value_collected: PropTypes.number.isRequired,
    formattedValueCollected: PropTypes.string.isRequired,
    formattedDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default CaseItem;
