import styled from 'styled-components'

import { Plus, CheckCircle } from '@styled-icons/boxicons-regular'

export const AddIcon = styled(Plus)`
  width: 24px;
  margin-left: 4px;
`
export const CheckIcon = styled(CheckCircle)`
  width: 24px;
`

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
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);

  & + div {
    margin-top: 48px;
  }
`

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 6rem;
  background: var(--color-white);
  border-radius: 0.8rem;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);

  & + form {
    margin-top: 48px;
  }
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0 48px 0;
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
  margin: 0 0;
  padding: 0.5rem 0;
  border: none;

  legend {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--color-primary);
  }

  > span {
    width: 36px;
    height: 4px;
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

export const InputMedias = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  width: 100%;

  button {
    width: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 16px;
    font-weight: bold;
    border-radius: 0.8rem;
    border: none;
    outline: none;
    background-color: var(--color-secondary);
    color: var(--color-white);

    &:hover{
      background-color: var(--color-secondary-dark);
    }
  }
`

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

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
