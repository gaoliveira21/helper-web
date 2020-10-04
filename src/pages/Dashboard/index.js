import React from 'react';

import { Container, BottomTabs, TopBar, Main } from './styles';

function Dashboard() {
  return (
    <Container>
      <TopBar />
      <Main />
      <BottomTabs />
    </Container>
  );
}

export default Dashboard;
