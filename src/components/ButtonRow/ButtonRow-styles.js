import styled from '@emotion/styled'

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NextButton = styled.button`
  background: var(--color-mediumpurple);
  &:hover, &:focus, &:active {
    background: var(--color-darkpurple) !important;
  }
`;

export { Box } from 'components/SharedStyles'
