import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 0.75fr;
  grid-template-areas: 'Sidebar Main';
`;

export const SideBar = styled.nav`
  grid-area: Sidebar;
  background: var(--color-primary);
  width: 100%;
  height: 100vh;
`;

export const Main = styled.main`
  display: grid;
  grid-template-rows: 60px 1fr;
`;

export const TopBar = styled.header`
  background: #ccc;
`;
