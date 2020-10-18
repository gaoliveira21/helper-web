import styled from 'styled-components'

export const InputBlock = styled.div`
  width: 100%;

  label {
    width: 100%;
    font-weight: bold;
  }

  textarea {
    margin-top: 4px;
    width: 100%;
    min-height: 240px;
    padding: 16px 24px;
    border-radius: 0.8rem;
    border: 1px solid transparent;
    outline: none;
    resize: none;
    background: var(--color-medium-gray);

    &:focus {
      border: 1px solid var(--color-primary);
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

`
