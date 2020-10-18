import styled from 'styled-components'

export const InputBlock = styled.div`
  width: 100%;
  position: relative;

  label {
    width: 100%;
    font-weight: bold;
  }

  input {
    margin-top: 4px;
    width: 100%;
    padding: 16px 24px;
    border-radius: 0.8rem;
    border: 2px solid transparent;
    outline: none;
    background: var(--color-medium-gray);

    &:focus {
      border-bottom: 2px solid var(--color-secondary);
    }
  }

  div{
    height: 16px;
    width: 100%;

    small {
    color: var(--color-primary);
    font-weight: bold;
    }
  }


  @media (min-width: 768px) {
    width: ${(props) => props.width};
  }
`
