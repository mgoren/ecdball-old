import styled from 'styled-components';

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  padding-bottom: 8px;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: #79818a;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Warning = styled.p`
  visibility: hidden;
  color: red;
  font-weight: 500;
  padding-top: .5rem;
`;

export const DonationButton = styled.button`
  font-size: 1rem;
  padding-left: 16px;
  padding-right: 16px;
`;

export const NextButton = styled.button`
  background: var(--color-mediumpurple);
  &:hover, &:focus, &:active {
    background: var(--color-darkpurple) !important;
  }
`;

export { Box, Spacer } from 'components/SharedStyles';
