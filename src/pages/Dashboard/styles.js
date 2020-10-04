import styled from 'styled-components';
import { FolderOpen, Home, DonateHeart } from '@styled-icons/boxicons-solid';

export const Container = styled.div`
  display: grid;
  height: 100%;
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
`;

export const BottomTabs = styled.nav`
  grid-area: bottomtabs;
  background: var(--color-primary);
  width: 100%;
  height: 100%;

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

const PanelIcon = styled(Home)``;

const CasesIcon = styled(FolderOpen)``;

const DonateIcons = styled(DonateHeart)``;
