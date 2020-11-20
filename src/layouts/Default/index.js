import React from 'react'
import PropTypes from 'prop-types'
import { useLocation, Link } from 'react-router-dom'

import { useAuth } from '../../contexts/auth'

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
  UserIcon,
  Divider
} from './styles'

function DefaultLayout ({ children, title }) {
  const location = useLocation()
  const { signOut, user } = useAuth()

  return (
    <Container>
      <SideBar>
        <header>
          <div>
            {user.profile?.avatar?.url
              ? <img
                src={user.profile?.avatar?.url}
                alt='Entidade'
              />
              : <UserIcon />}
          </div>
          <p>
            Olá, <strong>{user.name}</strong>
          </p>
        </header>
        <ul>
          <li className={location.pathname === '/dashboard' ? 'active' : ''}>
            <Link to='/dashboard'>
              <PanelIcon />
              Painel
            </Link>
          </li>
          <li className={location.pathname === '/cases' ? 'active' : ''}>
            <Link to='/cases'>
              <CasesIcon />
              Casos
            </Link>
          </li>
          <li className={location.pathname === '/donation' ? 'active' : ''}>
            <Link to='/donation'>
              <DonateIcon />
              Doações
            </Link>
          </li>
        </ul>
        <Divider />
        <ul>
          <li>
            <Link to='/profile'>
              <ProfileIcon />
              Perfil
            </Link>
          </li>
          <li>
            <button type='button' onClick={signOut}>
              <LogOutIcon />
              Sair
            </button>
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
        <Link to='/dashboard'>
          <PanelIcon
            className={location.pathname === '/dashboard' && 'active'}
          />
        </Link>
        <Link to='/cases'>
          <CasesIcon className={location.pathname === '/cases' && 'active'} />
        </Link>
        <Link to='/donation'>
          <DonateIcon
            className={location.pathname === '/donation' && 'active'}
          />
        </Link>
        <Link to='/profile'>
          <ProfileIcon />
        </Link>
        <LogOutIcon onClick={signOut} />
      </BottomTabs>
    </Container>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired
}

export default DefaultLayout
