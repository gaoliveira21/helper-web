import styled from 'styled-components';
import {
  FolderOpen,
  Home,
  DonateHeart,
  LogOut,
  UserDetail,
} from '@styled-icons/boxicons-solid';

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 60px;
  grid-template-areas:
    'maincontent'
    'bottomtabs';

  @media (min-width: 768px) {
    grid-template-rows: 100%;
    grid-template-columns: 0.2fr 0.8fr;
    grid-template-areas: 'sidenavbar maincontent';
  }
`;

export const SideBar = styled.nav`
  grid-area: sidenavbar;
  display: none;
  height: 100%;
  width: 100%;
  background: var(--color-primary);

  @media (min-width: 768px) {
    display: block;
  }

  header {
    width: 100%;
    min-height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;
      border-radius: 50%;
      background: #ccc;
      margin-bottom: 16px;
    }

    p {
      color: #fff;
      font-size: 2rem;
      font-family: Montserrat, Arial, sans-serif;
    }
  }

  ul {
    width: 100%;
    margin-top: 20px;

    li {
      width: 100%;
      padding: 10px 5px;
      transition: opacity 0.4s;

      a {
        margin-left: 15px;
        width: 100%;
        display: flex;
        align-items: center;
        color: var(--color-white);
        font-size: 1.6rem;
        text-decoration: none;
        font-weight: bold;

        svg {
          margin-right: 10px;
          width: 3.5rem;
        }
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const BottomTabs = styled.nav`
  grid-area: bottomtabs;
  background: var(--color-primary);
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Main = styled.main`
  grid-area: maincontent;
`;

export const TopBar = styled.header`
  width: 100%;
  height: 65px;
  background: var(--color-white);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  p {
    font-weight: bold;
    font-size: 2rem;

    strong {
      color: var(--color-primary);
    }
  }
`;

export const PanelIcon = styled(Home)`
  width: 4.5rem;
  color: var(--color-white);
`;

export const CasesIcon = styled(FolderOpen)`
  width: 4.5rem;
  color: var(--color-white);
`;

export const DonateIcon = styled(DonateHeart)`
  width: 4.5rem;
  color: var(--color-white);
`;

export const ProfileIcon = styled(UserDetail)`
  width: 4.5rem;
  color: var(--color-white);
`;

export const LogOutIcon = styled(LogOut)`
  width: 4.5rem;
  color: var(--color-white);
`;

export const Divider = styled.div`
  width: 80%;
  height: 2px;
  background: var(--color-white);
  margin: 40px auto;
`;
