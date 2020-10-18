import styled from 'styled-components'
import { Search, Plus } from '@styled-icons/boxicons-regular'

export const Container = styled.div`
  padding: 4rem 4rem;
`

export const SearchBox = styled.div`
  width: 100%;
  border-radius: 0.4rem;
  padding: 0.8rem;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;

  input {
    width: 100%;
    border: none;
    outline: none;
    padding: 12px 8px;
  }
`

export const AddIcon = styled(Plus)`
  width: 24px;
  margin-right: 4px;
`

export const SearchIcon = styled(Search)`
  color: var(--color-gray);
  width: 24px;
  cursor: pointer;
`

export const FilterBox = styled.div`
  margin: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    list-style-type: none;

    li {
      padding: 1rem 0.5rem;
      cursor: pointer;
      font-weight: bold;
      transition: opacity 0.4s;

      &.active {
        background: var(--color-primary);
        border-radius: 0.4rem;
        color: var(--color-white);
      }

      &:hover {
        opacity: 0.8;
      }

      @media (min-width: 768px) {
        padding: 1rem;
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-primary);
    border-radius: 0.4rem;
    padding: 1rem 1rem;
    color: var(--color-white);
    text-decoration: none;
    font-weight: bold;
    transition: background 0.4s;

    &:hover {
      background: var(--color-primary-dark);
    }

    @media (min-width: 768px) {
      padding: 1rem 2rem;
    }
  }
`

export const CaseList = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;
  }
`
