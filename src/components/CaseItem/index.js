import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
  Container,
  EditIcon,
  Progress,
  Header,
  Body,
  ActionBox,
} from './styles';

function CaseItem() {
  const history = useHistory();

  function handleNavigateToEdit() {
    history.push('/cases/update-case');
  }

  return (
    <Container>
      <Progress>
        <div>
          <strong>R$ 0,00</strong>
        </div>
      </Progress>
      <Header>
        <span>07/09/2020</span>
        <strong>R$ 200,00</strong>
      </Header>
      <Body>
        <h3>Título</h3>
        <span>Aberto</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
          felis non commodo ullamcorper.
        </p>
      </Body>
      <ActionBox>
        <Link to="/cases/detail-case">Detalhes</Link>
        <EditIcon onClick={() => handleNavigateToEdit()} />
      </ActionBox>
    </Container>
  );
}

export default CaseItem;
