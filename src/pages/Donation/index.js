import React from 'react'

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
                <tr>
                  <td>11/10/2020</td>
                  <td>Gabriel José de Oliveira</td>
                  <td>Ração para cachorros</td>
                  <td>R$ 50,00</td>
                </tr>
                <tr>
                  <td>11/10/2020</td>
                  <td>Gabriel José de Oliveira</td>
                  <td>Ração para cachorros</td>
                  <td>R$ 50,00</td>
                </tr>
                <tr>
                  <td>11/10/2020</td>
                  <td>Gabriel José de Oliveira</td>
                  <td>Ração para cachorros</td>
                  <td>R$ 50,00</td>
                </tr>
                <tr>
                  <td>11/10/2020</td>
                  <td>Gabriel José de Oliveira</td>
                  <td>Ração para cachorros</td>
                  <td>R$ 50,00</td>
                </tr>
                <tr>
                  <td>11/10/2020</td>
                  <td>Gabriel José de Oliveira</td>
                  <td>Ração para cachorros</td>
                  <td>R$ 50,00</td>
                </tr>
                <tr>
                  <td>11/10/2020</td>
                  <td>Gabriel José de Oliveira</td>
                  <td>Ração para cachorros</td>
                  <td>R$ 50,00</td>
                </tr>
                <tr>
                  <td>11/10/2020</td>
                  <td>Gabriel José de Oliveira</td>
                  <td>Ração para cachorros</td>
                  <td>R$ 50,00</td>
                </tr>
                <tr>
                  <td>11/10/2020</td>
                  <td>Gabriel José de Oliveira</td>
                  <td>Ração para cachorros</td>
                  <td>R$ 50,00</td>
                </tr>
                <tr>
                  <td>11/10/2020</td>
                  <td>Gabriel José de Oliveira</td>
                  <td>Ração para cachorros</td>
                  <td>R$ 50,00</td>
                </tr>
                <tr>
                  <td>11/10/2020</td>
                  <td>Gabriel José de Oliveira</td>
                  <td>Ração para cachorros</td>
                  <td>R$ 50,00</td>
                </tr>
                <tr>
                  <td>11/10/2020</td>
                  <td>Gabriel José de Oliveira</td>
                  <td>Ração para cachorros</td>
                  <td>R$ 50,00</td>
                </tr>
                <tr>
                  <td>11/10/2020</td>
                  <td>Gabriel José de Oliveira</td>
                  <td>Ração para cachorros</td>
                  <td>R$ 50,00</td>
                </tr>
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
