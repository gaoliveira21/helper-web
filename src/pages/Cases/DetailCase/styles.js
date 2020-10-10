import styled from 'styled-components';

import { Edit } from '@styled-icons/boxicons-regular';

export const EditIcon = styled(Edit)`
  width: 24px;
  margin-left: 1rem;
`;

export const Container = styled.div`
  padding: 0 2rem;
  margin: -8rem 0 2rem 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 6rem;
  background: var(--color-white);
  border-radius: 0.8rem;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  width: 100%;
  margin: 2rem 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const ValueCollected = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin: 2rem 0;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;

  span {
    color: var(--color-gray);
    font-weight: bold;
  }
`;

export const Progress = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 0.8rem;
  background-color: var(--color-medium-gray);

  > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: 86%;
    height: 100%;
    padding: 0 2rem;

    border-radius: 0.8rem;
    background-color: var(--color-secondary);
    color: var(--color-white);
  }
`;

export const TableDonators = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 2rem 0;

  caption {
    font-weight: bold;
    text-align: start;
    margin-bottom: 1rem;
  }

  thead {
    background-color: var(--color-primary);
    th {
      text-align: start;
      font-weight: bold;
      padding: 1rem 0 1rem 1rem;
      color: var(--color-white);
    }
  }

  tbody {
    tr:nth-child(even) {
      background-color: var(--color-medium-gray);
    }

    td {
      padding: 2rem 0 2rem 1rem;
    }
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    text-decoration: none;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    padding: 8px 20px;

    background: var(--color-primary);
    border: none;
    border-radius: 4px;
    color: var(--color-white);
    font-weight: bold;
    outline: none;

    &:hover {
      background: var(--color-primary-dark);
    }
  }
`;
