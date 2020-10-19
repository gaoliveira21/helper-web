import React, { useEffect, useState } from 'react'
import { DebounceInput } from 'react-debounce-input'

import { formatDate, formatPrice } from '../../util/format'

import api from '../../services/api'

import DefaultLayout from '../../layouts/Default'

import {
  Container,
  Header,
  DonateIcon,
  SearchBox,
  SearchIcon,
  Main,
  DonationTable,
  Scroll
} from './styles'

function Donation () {
  const [donations, setDonations] = useState([])
  const [totalDonated, setTotalDonated] = useState(0)
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function loadDonations () {
      const response = await api.get('/donations', {
        params: {
          title: search
        }
      })

      const serializedDonations = response.data.donations.map(({ created_at: createdAt, value, ...rest }) => ({
        formattedDate: formatDate(createdAt),
        formattedValue: formatPrice(value),
        ...rest
      }))

      setTotalDonated(response.data.totalDonated)
      setDonations(serializedDonations)
    }

    loadDonations()
  }, [search])

  return (
    <DefaultLayout title='Doações'>
      <Container>
        <Header>
          <p>Total arrecadado</p>
          <strong>
            <DonateIcon /> {formatPrice(totalDonated)}
          </strong>
        </Header>
        <Main>
          <div>
            <h3>Histórico</h3>
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
          </div>

          <Scroll>
            <DonationTable>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Doador</th>
                  <th>Caso</th>
                  <th>Valor doado</th>
                </tr>
              </thead>
              <tbody>
                {donations.map(donation => (
                  <tr key={donation.id}>
                    <td>{donation.formattedDate}</td>
                    <td>{donation.donator?.full_name || 'Doador anônimo'}</td>
                    <td>{donation.case?.title}</td>
                    <td>{donation.formattedValue}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>Data</th>
                  <th>Doador</th>
                  <th>Caso</th>
                  <th>Valor doado</th>
                </tr>
              </tfoot>
            </DonationTable>
          </Scroll>
        </Main>
      </Container>
    </DefaultLayout>
  )
}

export default Donation
