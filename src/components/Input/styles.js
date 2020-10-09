import styled from 'styled-components';

export const InputBlock = styled.div`
  width: 100%;

  label {
    width: 100%;
    font-weight: bold;
  }

  input {
    margin-top: 1rem;
    width: 100%;
    padding: 16px 24px;
    border-radius: 0.8rem;
    border: none;
    outline: none;
    background: var(--color-medium-gray);
  }

  @media (min-width: 768px) {
    width: ${(props) => props.width};
  }
`;
