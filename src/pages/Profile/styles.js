import styled from 'styled-components';

import { CheckDouble } from '@styled-icons/boxicons-regular';

export const CheckIcon = styled(CheckDouble)`
  color: var(--color-white);
  margin-left: 0.6rem;
  width: 3rem;
  height: auto;
  font-weight: 500;
`;

export const Container = styled.div`
  padding: 0 2rem;
  margin: -8rem 0 2rem 0;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0;
  width: 100%;

  img {
    width: 240px;
    height: auto;
  }

  > div {
    margin: 2rem 0;
    text-align: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;

    > div {
      text-align: justify;
    }
  }
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

export const Fieldset = styled.fieldset`
  margin: 2rem 0;
  padding: 0.5rem 0;
  border: none;

  legend {
    font-size: 2rem;
    font-weight: bold;
  }

  > span {
    margin: 0 auto;
    width: 100%;
    height: 2px;
    background: var(--color-primary);
    border-radius: 0.8rem;
    display: block;
    margin-bottom: 3rem;
  }
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

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;

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
