import styled from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular';

export const Container = styled.div`
  padding: 2rem;
`;

export const SearchBox = styled.div`
  width: 100%;
  border-radius: 0.4rem;
  padding: 0.8rem;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.15);

  display: flex;
  align-items: center;

  input {
    width: 100%;
    border: none;
  }
`;

export const SearchIcon = styled(Search)`
  color: var(--color-gray);
  width: 24px;
  cursor: pointer;
`;

export const FilterBox = styled.div`
  margin: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    list-style-type: none;

    li {
      padding: 1rem 0.5rem;
      cursor: pointer;
      font-weight: bold;
      transition: opacity 0.4s;

      &.active {
        background: var(--color-primary);
        border-radius: 0.4rem;
        color: var(--color-white);
      }

      &:hover {
        opacity: 0.8;
      }

      @media (min-width: 768px) {
        padding: 1rem;
      }
    }
  }

  a {
    background: var(--color-primary);
    padding: 1rem 0.5rem;
    border-radius: 0.4rem;
    color: var(--color-white);
    text-decoration: none;
    font-weight: bold;
    transition: all 0.4s;

    &:hover {
      opacity: 0.8;
    }

    @media (min-width: 768px) {
      padding: 1rem;
    }
  }
`;
