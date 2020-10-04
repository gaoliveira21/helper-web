import React from 'react';

import { Container, SideBar, TopBar, Main } from './styles';

function Dashboard() {
  return (
    <Container>
      <SideBar />
      <Main>
        <TopBar />
      </Main>
    </Container>
  );
}

export default Dashboard;
