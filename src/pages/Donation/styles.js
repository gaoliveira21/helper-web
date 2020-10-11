import styled from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular';
import { DonateHeart } from '@styled-icons/boxicons-solid';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 3rem 4rem;
  overflow-x: hidden;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  p {
    font-size: 1.8rem;
    color: var(--color-gray);
  }

  strong {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.5rem;
    color: var(--color-green);
  }
`;

export const DonateIcon = styled(DonateHeart)`
  width: 4rem;
  margin-right: 8px;
  color: var(--color-green);
`;

export const Main = styled.main`
  margin-top: 35px;

  h3 {
    font-size: 2rem;
    margin-bottom: 15px;
  }
`;

export const SearchBox = styled.div`
  width: 100%;
  border-radius: 0.4rem;
  padding: 0.8rem;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;

  input {
    width: 100%;
    border: none;
    outline: none;
    padding: 12px 8px;
  }
`;

export const SearchIcon = styled(Search)`
  color: var(--color-gray);
  width: 24px;
  cursor: pointer;
`;

export const DonationTable = styled.table`
  margin-top: 35px;
  border-spacing: 0;
  min-width: 100%;
  width: 600px;
  height: 100%;

  thead,
  tfoot {
    background: var(--color-black);
    color: var(--color-white);

    th {
      padding: 2rem 1rem;
      text-align: left;
    }
  }

  tbody {
    width: 100%;
    overflow-x: scroll;

    tr:nth-child(even) {
      background: var(--color-medium-gray);

      &:hover {
        background: ${darken(0.05, '#DFE4EA')};
      }
    }

    tr:nth-child(odd) {
      background: var(--color-white);

      &:hover {
        background: ${darken(0.05, '#fff')};
      }
    }

    td {
      padding: 2rem 1rem;
    }
  }
`;

export const Scroll = styled.div`
  overflow-x: auto;
`;
