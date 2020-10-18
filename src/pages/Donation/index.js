import React, { useEffect, useState } from 'react'

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

  useEffect(() => {
    async function loadDonations () {
      const response = await api.get('/donations')

      const serializedDonations = response.data.map(({ created_at: createdAt, value, ...rest }) => ({
        formattedDate: formatDate(createdAt),
        formattedValue: formatPrice(value),
        ...rest
      }))

      setDonations(serializedDonations)
    }

    loadDonations()
  }, [])

  return (
    <DefaultLayout title='Doações'>
      <Container>
        <Header>
          <p>Total arrecadado</p>
          <strong>
            <DonateIcon /> R$ 10.547,00
          </strong>
        </Header>
        <Main>
          <div>
            <h3>Histórico</h3>
            <SearchBox>
              <input type='text' placeholder='Pesquisar...' />
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
