import styled from 'styled-components';

export const InputBlock = styled.div`
  width: 100%;

  label {
    width: 100%;
    font-weight: bold;
  }

  textarea {
    margin-top: 1rem;
    width: 100%;
    min-height: 240px;
    padding: 16px 24px;
    border-radius: 0.8rem;
    border: none;
    outline: none;
    resize: none;
    background: var(--color-medium-gray);
  }
`;
