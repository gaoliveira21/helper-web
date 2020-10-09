import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const ImageContent = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: var(--color-primary);
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0 80px;
  height: 10vh;

  h1 {
    font-size: 4rem;
    color: var(--color-white);
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  img {
    width: 700px;
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

  h1 {
    margin-bottom: 4rem;
    font-size: 4rem;
    color: var(--color-primary);
  }

  h2 {
    margin-bottom: 4rem;
    font-size: 3.5rem;
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
    padding: 16px 24px;
    border-radius: 4px;
    border: none;
    margin-bottom: 24px;
    outline: none;
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
    h1 {
      display: none;
    }

    h2 {
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