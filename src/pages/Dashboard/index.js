import React from 'react';

import {
  Container,
  PanelCard,
  DonateIcon,
  MoneyIcon,
  CasesIcon,
} from './styles';

import dashboardImage from '../../assets/images/dashboard.svg';

import DefaultLayout from '../../layouts/Default';

function Dashboard() {
  return (
    <DefaultLayout title="Painel">
      <Container>
        <div>
          <PanelCard color="#5B5F97">
            <p>
              <strong>Casos ativos</strong>
            </p>
            <div>
              <CasesIcon />
              <strong>100</strong>
            </div>
          </PanelCard>
          <PanelCard color="#6FCF97">
            <p>
              <strong>Doações</strong>
            </p>
            <div>
              <DonateIcon />
              <strong>100</strong>
            </div>
          </PanelCard>
          <PanelCard color="#F2B279">
            <p>
              <strong>Total arrecadado</strong>
            </p>
            <div>
              <MoneyIcon />
              <strong>R$ 1100,00</strong>
            </div>
          </PanelCard>
        </div>
        <img src={dashboardImage} alt="Dashboard" />
      </Container>
    </DefaultLayout>
  );
}

export default Dashboard;
