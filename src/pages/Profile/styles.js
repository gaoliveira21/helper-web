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

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0;
  width: 100%;

  h2 {
    font-size: 3rem;
  }

  strong{
    font-size: 2rem;
    color: var(--color-gray);
  }

  img {
    position: absolute;
    width: 300px;
    height: auto;
  }

  > div {
    text-align: center;
    margin-top: 24px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4rem;

    > div {
      text-align: justify;
    }
  }
`

export const ImageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  overflow: hidden;
  position: relative;
`

export const Fieldset = styled.fieldset`
  margin: 24px 0;
  padding: 0.5rem 0;
  border: none;

  legend {
    font-size: 1.8rem;
    font-weight: bold;
  }

  > span {
    margin: 0 auto;
    width: 100%;
    height: 2px;
    background: var(--color-primary);
    border-radius: 0.8rem;
    display: block;
    margin-bottom: 12px;
  }
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
