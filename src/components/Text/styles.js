import styled from 'styled-components';

export const TextBlock = styled.div`
  width: 100%;

  strong {
    width: 100%;
    font-weight: bold;
    font-size: 1.8rem;
  }

  p {
    margin-top: 0.5rem;
    line-height: 32px;
  }

  @media (min-width: 768px) {
    width: ${(props) => props.width};
  }
`;
