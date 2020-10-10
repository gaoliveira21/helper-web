import React from 'react';

import DefaultLayout from '../../layouts/Default';

import { Container, SearchBox, SearchIcon } from './styles';

function Cases() {
  return (
    <DefaultLayout>
      <Container>
        <SearchBox>
          <input type="text" placeholder="Pesquisar..." />
          <SearchIcon />
        </SearchBox>
      </Container>
    </DefaultLayout>
  );
}

export default Cases;
