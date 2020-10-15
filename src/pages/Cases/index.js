import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { formatPrice } from '../../util/format';
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

      const formattedCases = response.data.cases.map((caseItem) => {
        return {
          ...caseItem,
          description:
            caseItem.description.length > 100
              ? `${caseItem.description.match(/^.{1,97}/)[0]}...`
              : caseItem.description,
          formattedValue: formatPrice(caseItem.value),
          formattedValueCollected: formatPrice(caseItem.value_collected),
        };
      });

      setCases(formattedCases);
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
            <CaseItem key={caseItem.id} data={caseItem} />
          ))}
        </CaseList>
      </Container>
    </DefaultLayout>
  );
}

export default Cases;
