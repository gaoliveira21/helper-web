import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;

  h3 {
    position: absolute;
    top: 0;
    right: 0;
    font-weight: bold;
    color: var(--color-primary);
    font-size: 3rem;
    padding: 3rem 3rem 0 0;
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 48px;

  h1 {
    font-size: 12rem;
    color: var(--color-primary);
    margin-bottom: 24px;
  }

  strong {
    font-size: 3.5rem;
  }

  p {
    color: var(--color-gray);
    font-size: 2.4rem;
    font-weight: bold;
    margin: 12px 0;
    text-align: center;
  }

  button {
    width: 100%;
    padding: 16px 16px;
    margin-top: 36px;

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

  @media (min-width: 768px) {
    align-items: flex-start;

    h1 {
      font-size: 16rem;
    }

    p {
      text-align: start;
    }
  }
`;

export const Image = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 48px;

    img {
      width: 100%;
    }
  }
`;
