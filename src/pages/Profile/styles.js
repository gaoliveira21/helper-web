import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  height: 40vh;
  width: 100%;
  padding: 2rem 3rem;
  background: var(--color-primary);

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-white);
  }

  > div {
    margin: 6rem auto;
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
