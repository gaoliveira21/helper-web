import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 2rem;
  margin: -48px 0 48px 0;
`

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
`

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  width: 100%;
  margin: 24px 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 0;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    width: 100%;
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

    @media (min-width: 768px) {
      width: 240px;
    }
  }

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`

export const Dropzone = styled.div`
  width: 100%;
  cursor: pointer;
  margin-bottom: 8px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 12px;
    width: 100%;
    height: 80px;
    border-radius: 0.8rem;
    border: 2px dashed var(--color-medium-gray);
    font-size: 2rem;
    outline: none;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;

  strong {
    font-size: 1.8rem;
  }

  span {
    color: var(--color-gray);
    font-weight: bold;
    text-align: right;
  }
`

export const PreviewContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Preview = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
    }
`
