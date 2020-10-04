import React from 'react';

import { Container, SideBar, BottomTabs, TopBar, Main } from './styles';

function Dashboard() {
  return (
    <Container>
      <SideBar />
      <Main>
        <TopBar />
        <div />
      </Main>
      <BottomTabs />
    </Container>
  );
}

export default Dashboard;
