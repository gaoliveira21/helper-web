import styled from 'styled-components';
import { Edit } from '@styled-icons/boxicons-regular';

export const Container = styled.div`
  background: var(--color-white);
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.15);
  border-radius: 0.4rem;
  margin-bottom: 48px;
`;

export const Progress = styled.div`
  width: 100%;
  height: 24px;
  background: var(--color-medium-gray);
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;

  div {
    width: 20%;
    height: 100%;
    background: var(--color-secondary);
    display: flex;
    padding: 0 0.4rem;
    align-items: center;
    justify-content: flex-end;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;

    strong {
      color: var(--color-white);
      font-size: 1.1rem;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  span {
    color: var(--color-gray);
    font-size: 1.4rem;
  }
`;

export const Body = styled.div`
  padding: 1rem 2rem;

  h3 {
    font-size: 2.5rem;
  }

  span {
    padding: 0.2rem 1rem;
    background: var(--color-green);
    border-radius: 0.8rem;
    color: var(--color-white);
    font-size: 1.2rem;
  }

  p {
    margin-top: 18px;
    text-align: justify;
    line-height: 24px;
    min-height: 6rem;
  }
`;

export const ActionBox = styled.footer`
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    padding: 1rem 2rem;
    background: var(--color-primary);
    color: var(--color-white);
    text-decoration: none;
    border-radius: 0.4rem;
    transition: background 0.4s;

    &:hover {
      background: var(--color-primary-dark);
    }
  }
`;

export const EditIcon = styled(Edit)`
  width: 28px;
  color: var(--color-gray);
  cursor: pointer;
  transition: color 0.4s;

  &:hover {
    color: var(--color-primary);
  }
`;
