import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import DefaultLayout from '../../layouts/Default';
import CaseItem from '../../components/CaseItem';

import {
  Container,
  SearchBox,
  SearchIcon,
  FilterBox,
  CaseList,
} from './styles';

function Cases() {
  const [filter, setFilter] = useState('all');

  return (
    <DefaultLayout title="Casos">
      <Container>
        <SearchBox>
          <input type="text" placeholder="Pesquisar..." />
          <SearchIcon />
        </SearchBox>
        <FilterBox>
          <ul>
            <li
              className={filter === 'all' && 'active'}
              onClick={() => setFilter('all')}
            >
              Todos
            </li>
            <li
              className={filter === 'open' && 'active'}
              onClick={() => setFilter('open')}
            >
              Abertos
            </li>
            <li
              className={filter === 'done' && 'active'}
              onClick={() => setFilter('done')}
            >
              Concluídos
            </li>
          </ul>
          <Link to="/cases/new-case">Novo caso</Link>
        </FilterBox>
        <CaseList>
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
        </CaseList>
      </Container>
    </DefaultLayout>
  );
}

export default Cases;
