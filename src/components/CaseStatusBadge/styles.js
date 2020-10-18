import styled from 'styled-components'

export const Badge = styled.span`
  padding: 0.2rem 1rem;
  background: ${(props) =>
    props.opened ? 'var(--color-yellow)' : 'var(--color-green)'};
  border-radius: 0.8rem;
  color: var(--color-white);
  font-size: 1.2rem;
`
