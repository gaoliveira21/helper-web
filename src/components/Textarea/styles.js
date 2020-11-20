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
    border: 2px solid transparent;
    outline: none;
    resize: none;
    background: var(--color-medium-gray);
    line-height: 24px;

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

`
