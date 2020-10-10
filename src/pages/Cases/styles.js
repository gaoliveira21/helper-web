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
