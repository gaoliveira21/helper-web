import styled from 'styled-components';
import {
  FolderOpen,
  DonateHeart,
  CoinStack,
} from '@styled-icons/boxicons-solid';

export const Container = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;

  > div {
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 20px;

    @media (min-width: 768px) {
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 20px;
    }
  }

  > img {
    display: none;

    @media (min-width: 768px) {
      display: flex;
      align-self: center;
      margin-top: 20px;
      width: 320px;
    }
  }
`;

export const PanelCard = styled.div`
  width: 100%;
  background: ${(props) => props.color};
  border-radius: 0.8rem;
  color: #fff;
  font-size: 2rem;
  font-family: Montserrat, Arial, sans-serif;
  padding: 20px;

  p {
    margin-bottom: 15px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 3.5rem;
    }
  }
`;

export const CasesIcon = styled(FolderOpen)`
  width: 5rem;
  color: var(--color-white);
`;

export const DonateIcon = styled(DonateHeart)`
  width: 5rem;
  color: var(--color-white);
`;

export const MoneyIcon = styled(CoinStack)`
  width: 5rem;
  color: var(--color-white);
`;
