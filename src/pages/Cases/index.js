import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input'

import api from '../../services/api'

import DefaultLayout from '../../layouts/Default'
import CaseItem from '../../components/CaseItem'

import {
  Container,
  SearchBox,
  SearchIcon,
  AddIcon,
  FilterBox,
  CaseList
} from './styles'

function Cases () {
  const [cases, setCases] = useState([])
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  useEffect(() => {
    let opened = null

    switch (filter) {
      case 'open':
        opened = true
        break
      case 'done':
        opened = false
        break

      default:
        opened = null
        break
    }

    async function loadCases () {
      const response = await api.get('/entities/cases', {
        params: {
          page: 1,
          limit: 10,
          title: search,
          opened
        }
      })

      setCases(response.data.cases)
    }

    loadCases()
  }, [search, filter])

  return (
    <DefaultLayout title='Casos'>
      <Container>
        <SearchBox>
          <DebounceInput
            minLength={2}
            debounceTimeout={300}
            onChange={(event) => setSearch(event.target.value)}
            element='input'
            placeholder='Pesquisar...'
          />
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
          <Link to='/cases/new-case'>
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
  )
}

export default Cases
