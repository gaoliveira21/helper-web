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
  Divider,
} from './styles';

function DefaultLayout({ children }) {
  return (
    <Container>
      <SideBar>
        <header>
          <img
            src="https://api.adorable.io/avatars/285/abott@adorable.png"
            alt="Entidade"
          />
          <p>
            Olá, <strong>entidade</strong>
          </p>
        </header>
        <ul>
          <li>
            <a href="#!">
              <PanelIcon />
              Painel
            </a>
          </li>
          <li>
            <a href="#!">
              <CasesIcon />
              Casos
            </a>
          </li>
          <li>
            <a href="#!">
              <DonateIcon />
              Doações
            </a>
          </li>
        </ul>
        <Divider />
        <ul>
          <li>
            <a href="#!">
              <ProfileIcon />
              Perfil
            </a>
          </li>
          <li>
            <a href="#!">
              <LogOutIcon />
              Sair
            </a>
          </li>
        </ul>
      </SideBar>
      <Main>
        <TopBar>
          <p>Painel</p>
          <p>
            <strong>Helper</strong>
          </p>
        </TopBar>
        {children}
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

export default DefaultLayout;
