import styled from 'styled-components'

import { LeftArrowAlt } from '@styled-icons/boxicons-regular'

export const BackIcon = styled(LeftArrowAlt)`
  color: var(--color-white);
  margin-right: 4px;
  width: 2.4rem;
  height: auto;
`

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  height: 40vh;
  width: 100%;
  padding: 24px 12px 48px 12px;
  background: var(--color-primary);

  nav {
    display: flex;
    align-items: start;
    justify-content: space-between;
    height: 5vh;
    color: var(--color-white);

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: var(--color-white);
      outline: none;
      text-decoration: none;
      background: none;
      border: none;
    }
  }
`

export const TitleHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  > div {
    width: 100%;
    max-width: 1100px;
    padding: 0 24px;

    h1 {
      font-size: 3.5rem;
      color: var(--color-white);
    }

    div {
      margin: 8px 0;

      p {
        color: var(--color-white);
        text-align: start;

        span {
          padding: 4px 36px;
          background-color: var(--color-green);
          border-radius: 0.8rem;
          font-size: 1.2rem;
        }
      }
    }
  }
`
