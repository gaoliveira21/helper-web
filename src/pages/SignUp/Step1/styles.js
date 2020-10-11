import styled from 'styled-components';

import { LeftArrowAlt } from '@styled-icons/boxicons-regular';

export const BackIcon = styled(LeftArrowAlt)`
  color: var(--color-gray);
  margin-right: 4px;
  width: 24px;
  height: auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

// Image Content
export const ImageContent = styled.div`
  display: none;

  h3 {
    position: absolute;
    top: 0;
    right: 0;
    padding: 3rem 3rem 0 0;
    color: var(--color-white);
    font-size: 3rem;
  }

  img {
    width: 90%;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: var(--color-primary);
  }
`;

// Form content
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 48px 48px;

  h3 {
    position: absolute;
    top: 0;
    right: 0;
    padding: 2rem 2rem;
    color: var(--color-primary);
  }

  @media (min-width: 768px) {
    h3 {
      display: none;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;

  a {
    display: flex;
    align-items: center;
    color: var(--color-gray);
    text-decoration: none;
  }

  > div {
    margin: 48px 0;
    h1 {
      font-size: 4rem;
    }

    p {
      color: var(--color-gray);
    }
  }
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  margin: 12px 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Button = styled.button`
  width: 100%;
  margin: 24px 0;
  padding: 16px 40px;

  background: var(--color-primary);
  border: none;
  border-radius: 4px;
  color: var(--color-white);
  font-weight: bold;
  outline: none;

  &:hover {
    background: var(--color-primary-dark);
  }
`;
