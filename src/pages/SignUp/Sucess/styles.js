import styled from 'styled-components'

// import { CheckCircle } from '@styled-icons/boxicons-solid';
import { CheckCircle } from '@styled-icons/boxicons-regular'

export const CheckIcon = styled(CheckCircle)`
  color: var(--color-green);
  width: 70%;
  height: auto;

  @media (min-width: 768px) {
    width: 25%;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`

// Image Content
export const ImageContent = styled.div`
  display: none;

  h3 {
    position: absolute;
    top: 0;
    right: 0;
    padding: 3rem 3rem 0 0;
    color: var(--color-primary);
    font-size: 3rem;
  }

  img {
    width: 80%;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: var(--color-white);
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 40px;

  img {
    width: 20%;
  }

  h1 {
    margin: 2rem 0;
    text-align: center;
  }

  a {
    background: var(--color-primary);
    padding: 16px 40px;
    border: none;
    border-radius: 4px;
    color: var(--color-white);
    font-weight: bold;
    outline: none;
    text-decoration: none;
    text-align: center;

    &:hover {
      background: var(--color-primary-dark);
    }
  }
`
