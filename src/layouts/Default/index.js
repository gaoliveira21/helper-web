import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

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

function DefaultLayout({ children, title }) {
  const location = useLocation();

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
          <p>{title}</p>
          <p>
            <strong>Helper</strong>
          </p>
        </TopBar>
        {children}
      </Main>
      <BottomTabs>
        <PanelIcon className={location.pathname === '/dashboard' && 'active'} />
        <CasesIcon className={location.pathname === '/cases' && 'active'} />
        <DonateIcon
          className={location.pathname === '/donations' && 'active'}
        />
        <ProfileIcon />
        <LogOutIcon />
      </BottomTabs>
    </Container>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default DefaultLayout;
