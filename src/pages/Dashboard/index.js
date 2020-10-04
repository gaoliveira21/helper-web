import React from 'react';

import {
  Container,
  SideBar,
  BottomTabs,
  TopBar,
  Main,
  PanelIcon,
  CasesIcon,
  DonateIcon,
  ProfileIcon,
  LogOutIcon,
} from './styles';

function Dashboard() {
  return (
    <Container>
      <SideBar />
      <Main>
        <TopBar>
          <p>Painel</p>
          <p>
            <strong>Helper</strong>
          </p>
        </TopBar>
        <div />
      </Main>
      <BottomTabs>
        <PanelIcon />
        <CasesIcon />
        <DonateIcon />
        <ProfileIcon />
        <LogOutIcon />
      </BottomTabs>
    </Container>
  );
}

export default Dashboard;
