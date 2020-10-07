import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem;
  margin-top: -8rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 6rem;
  background: var(--color-white);
  border-radius: 0.8rem;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  width: 100%;
  margin: 2rem 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Dropzone = styled.div`
  width: 100%;

  label {
    font-weight: bold;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    width: 100%;
    height: 360px;
    border-radius: 0.8rem;
    border: 4px dashed var(--color-medium-gray);
    font-size: 2rem;
  }
`;
