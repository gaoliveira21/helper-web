import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import DefaultLayout from '../../layouts/Default';
import CaseItem from '../../components/CaseItem';

import {
  Container,
  SearchBox,
  SearchIcon,
  AddIcon,
  FilterBox,
  CaseList,
} from './styles';

function Cases() {
  const [cases, setCases] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    async function loadCases() {
      const response = await api.get('/entities/cases', {
        params: {
          page: 1,
          limit: 10,
          title: '',
          opened: null,
        },
      });

      setCases(response.data.cases);
    }

    loadCases();
  }, []);

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
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              Todos
            </li>
            <li
              className={filter === 'open' ? 'active' : ''}
              onClick={() => setFilter('open')}
            >
              Abertos
            </li>
            <li
              className={filter === 'done' ? 'active' : ''}
              onClick={() => setFilter('done')}
            >
              Concluídos
            </li>
          </ul>
          <Link to="/cases/new-case">
            <AddIcon />
            Novo caso
          </Link>
        </FilterBox>
        <CaseList>
          {cases.map((caseItem) => (
            <CaseItem key={caseItem.id} />
          ))}
        </CaseList>
      </Container>
    </DefaultLayout>
  );
}

export default Cases;
