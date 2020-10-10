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
  justify-content: flex-end;
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

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0 40px;

  h1 {
    font-size: 3.5rem;
  }

  h3 {
    position: absolute;
    top: 0;
    right: 0;
    padding: 2rem 2rem;
    color: var(--color-primary);
  }

  p {
    margin-bottom: 4rem;
    color: var(--color-gray);
  }

  form {
    width: 100%;

    button {
      margin: 1rem 0;
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
  }

  @media (min-width: 768px) {
    form {
      width: 500px;
      margin: 0 auto;
    }
  }
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  margin: 1rem 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
