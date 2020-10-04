import styled from 'styled-components';
import { FolderOpen, Home, DonateHeart } from '@styled-icons/boxicons-solid';

export const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 65px auto 60px;
  grid-template-areas:
    'topheader'
    'maincontent'
    'bottomtabs';
`;

export const BottomTabs = styled.nav`
  grid-area: bottomtabs;
  background: var(--color-primary);
  width: 100%;
  height: 100%;
`;

export const Main = styled.main`
  grid-area: maincontent;
  height: 100%;
`;

export const TopBar = styled.header`
  grid-area: topheader;
  background: #ccc;
`;

const PanelIcon = styled(Home)``;

const CasesIcon = styled(FolderOpen)``;

const DonateIcons = styled(DonateHeart)``;
