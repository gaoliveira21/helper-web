import styled from 'styled-components'

export const ImagePreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 180px;
  border-radius: 0.8rem;
  background-color: var(--color-primary);
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    width: 400px;
  }

  button{
    position: absolute;
    top: 0;
    right: 0;

    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 4px 8px;
    border-top-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    border: none;
    outline: none;

    &:hover {
      background-color: var(--color-primary-dark)
    }
  }
`
