import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { Edit } from '@styled-icons/boxicons-regular'

export const Container = styled.div`
  background: var(--color-white);
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.15);
  border-radius: 0.8rem;
`

export const Progress = styled.div`
  width: 100%;
  height: 36px;
  background: var(--color-medium-gray);
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;

  div {
    width: ${(props) => (props.percent < 20 ? '20%' : `${props.percent}%`)};
    height: 100%;
    display: flex;
    padding: 0 0.8rem;
    align-items: center;
    justify-content: flex-end;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;

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

    strong {
      color: var(--color-white);
      font-size: 1.6rem;
    }
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  span {
    color: var(--color-gray);
    font-size: 1.4rem;
  }
`

export const Body = styled.div`
  padding: 1rem 2rem;

  h3 {
    font-size: 2.5rem;
  }

  p {
    margin-top: 18px;
    text-align: justify;
    line-height: 24px;
  }
`

export const ActionBox = styled.footer`
  padding: 2rem 2rem;
  display: flex;
  justify-content: space-between;

  a {
    padding: 1rem 2rem;
    background: var(--color-primary);
    color: var(--color-white);
    text-decoration: none;
    border-radius: 0.4rem;
    transition: background 0.4s;

    &:hover {
      background: var(--color-primary-dark);
    }
  }
`

export const EditIcon = styled(Edit)`
  width: 28px;
  color: var(--color-gray);
  cursor: pointer;
  transition: color 0.4s;

  &:hover {
    color: var(--color-primary);
  }
`
