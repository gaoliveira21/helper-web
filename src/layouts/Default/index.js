import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';

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
          <li className={location.pathname === '/dashboard' && 'active'}>
            <Link to="/dashboard">
              <PanelIcon />
              Painel
            </Link>
          </li>
          <li className={location.pathname === '/cases' && 'active'}>
            <Link to="/cases">
              <CasesIcon />
              Casos
            </Link>
          </li>
          <li className={location.pathname === '/donation' && 'active'}>
            <Link to="/donation">
              <DonateIcon />
              Doações
            </Link>
          </li>
        </ul>
        <Divider />
        <ul>
          <li>
            <Link to="/profile">
              <ProfileIcon />
              Perfil
            </Link>
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
        <Link to="/dashboard">
          <PanelIcon
            className={location.pathname === '/dashboard' && 'active'}
          />
        </Link>
        <Link to="/cases">
          <CasesIcon className={location.pathname === '/cases' && 'active'} />
        </Link>
        <Link to="/donation">
          <DonateIcon
            className={location.pathname === '/donation' && 'active'}
          />
        </Link>
        <Link to="/profile">
          <ProfileIcon />
        </Link>
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
