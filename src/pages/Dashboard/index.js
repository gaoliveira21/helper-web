import React, { useState, useEffect } from 'react'

import { formatPrice } from '../../util/format'
import api from '../../services/api'

import {
  Container,
  PanelCard,
  DonateIcon,
  MoneyIcon,
  CasesIcon
} from './styles'

import dashboardImage from '../../assets/images/dashboard.svg'

import DefaultLayout from '../../layouts/Default'

function Dashboard () {
  const [dashboard, setDashboard] = useState({})

  useEffect(() => {
    async function loadDashboard () {
      const response = await api.get('/entities/dashboard')

      setDashboard(response.data)
    }

    loadDashboard()
  }, [])

  return (
    <DefaultLayout title='Painel'>
      <Container>
        <div>
          <PanelCard color='#5B5F97'>
            <p>
              <strong>Casos ativos</strong>
            </p>
            <div>
              <CasesIcon />
              <strong>{dashboard.activeCases}</strong>
            </div>
          </PanelCard>
          <PanelCard color='#6FCF97'>
            <p>
              <strong>Doações</strong>
            </p>
            <div>
              <DonateIcon />
              <strong>{dashboard.donationsCount}</strong>
            </div>
          </PanelCard>
          <PanelCard color='#F2B279'>
            <p>
              <strong>Total arrecadado</strong>
            </p>
            <div>
              <MoneyIcon />
              <strong>{formatPrice(dashboard.totalAmount)}</strong>
            </div>
          </PanelCard>
        </div>
        <img src={dashboardImage} alt='Dashboard' />
      </Container>
    </DefaultLayout>
  )
}

export default Dashboard
