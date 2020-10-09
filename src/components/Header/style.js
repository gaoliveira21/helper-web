import styled from 'styled-components';

import { LeftArrowAlt } from '@styled-icons/boxicons-regular';

export const BackIcon = styled(LeftArrowAlt)`
  color: var(--color-white);
  margin-right: 1rem;
  width: 2.4rem;
  height: auto;
`;

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  height: 40vh;
  width: 100%;
  padding: 2rem 2rem;
  background: var(--color-primary);

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-white);

    a {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: var(--color-white);
      text-decoration: none;
    }
  }

  > div {
    margin: 8rem auto;
    width: 100%;
    max-width: 1100px;
    align-items: center;
    padding: 2rem 2rem;

    h1 {
      font-size: 3.5rem;
      color: var(--color-white);
    }

    > div {
      margin: 0.5rem 0rem;

      p {
        color: var(--color-white);
      }
    }
  }
`;
