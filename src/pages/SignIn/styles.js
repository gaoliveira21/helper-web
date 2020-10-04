import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const Image = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: var(--color-primary);

    strong {
      font-size: 5rem;
      color: var(--color-white);
    }

    > img {
      width: 500px;
      margin-top: 4rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 90vh;
  padding: 0 40px;

  strong {
    font-size: 4rem;
    color: var(--color-primary);
  }

  h1 {
    font-size: 3.5rem;
    margin: 4rem 0;
  }

  form {
    width: 100%;
  }

  label {
    display: block;
    margin: 8px 0px;
    font-weight: bold;
  }
  input {
    display: block;
    width: 100%;
    padding: 16px 40px;
    border-radius: 4px;
    border: none;
    margin-bottom: 24px;
  }

  button {
    width: 100%;
    background: var(--color-primary);
    padding: 16px 40px;
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
    strong {
      display: none;
    }

    h1 {
      text-align: center;
    }

    form {
      width: 500px;
      margin: 0 auto;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 40px;
  width: 100%;
  height: 10vh;
  background-color: var(--color-white);

  a {
    font-weight: bold;
    color: var(--color-primary);
    text-decoration: none;
  }

  @media (min-width: 768px) {
    padding: 0 80px;
  }
`;
