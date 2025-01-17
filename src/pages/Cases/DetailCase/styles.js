import styled, { keyframes, css } from 'styled-components'
import { darken } from 'polished'

import { Edit, LoaderCircle } from '@styled-icons/boxicons-regular'

export const EditIcon = styled(Edit)`
  width: 24px;
  margin-right: 4px;
`

export const Container = styled.div`
  padding: 0 2rem;
  margin: -48px 0 48px 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 3rem;
  background: var(--color-white);
  border-radius: 0.8rem;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  text-align: justify;

  width: 100%;
  margin: 24px 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const ValueCollected = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin: 24px 0;
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

export const Progress = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 0.8rem;
  background-color: var(--color-medium-gray);

  > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: ${(props) => (props.percent < 30 ? '30%' : `${props.percent}%`)};
    height: 100%;
    padding: 0 12px;
    border-radius: 0.8rem;
    color: var(--color-white);

    ${(props) =>
      props.percent >= 100
        ? css`
            background: repeating-linear-gradient(
              -55deg,
              ${darken(0.08, '#6FCF97')},
              ${darken(0.08, '#6FCF97')} 15px,
              var(--color-green) 10px,
              var(--color-green) 30px
            );
          `
        : css`
            background: repeating-linear-gradient(
              -55deg,
              ${darken(0.07, '#5B5F97')},
              ${darken(0.07, '#5B5F97')} 15px,
              var(--color-secondary) 10px,
              var(--color-secondary) 30px
            );
          `}

    @media (min-width: 768px){
      width: ${(props) => (props.percent < 10 ? '10%' : `${props.percent}%`)};
    }
  }
`

export const TableDonators = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 24px 0;

  caption {
    font-weight: bold;
    font-size: 1.8rem;
    text-align: start;
    margin-bottom: 8px;
  }

  thead {
    background-color: var(--color-primary);
    th {
      text-align: start;
      font-weight: bold;
      padding: 2rem 1rem;
      color: var(--color-white);
    }
  }

  tbody {
    tr:nth-child(even) {
      background-color: var(--color-medium-gray);

      &:hover {
        background: ${darken(0.05, '#DFE4EA')};
      }
    }

    tr:nth-child(odd) {
      background: var(--color-white);

      &:hover {
        background: ${darken(0.05, '#fff')};
      }
    }

    td {
      padding: 2rem 1rem;
    }
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

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 180px;
      border-radius: 0.8rem;
      background-color: var(--color-primary);
      overflow: hidden;
      position: relative;
    }

    img {
      position: absolute;
      width: 400px;
    }

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
    }
`

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    text-decoration: none;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    padding: 8px 20px;

    background: var(--color-primary);
    border: none;
    border-radius: 4px;
    color: var(--color-white);
    font-weight: bold;
    outline: none;

    &:hover {
      background: var(--color-primary-dark);
    }
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loading = styled(LoaderCircle)`
  color: var(--color-primary);
  display: flex;
  align-self: center;
  width: 5rem;
  animation: ${rotate} 2s linear infinite;
`

export const Scroll = styled.div`
  overflow-x: auto;
`
