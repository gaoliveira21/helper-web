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
    color: var(--color-primary);
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
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 40px;

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
`;
