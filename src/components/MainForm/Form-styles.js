import styled from '@emotion/styled';

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
`;

export const CheckboxLabel = styled.label`
  padding-left: .5em;
`;

export const AboveCheckboxLabel = styled.label`
  padding-bottom: .5em;
`;

export const Input = styled.div`
  margin-bottom: 1rem;
`;

export const TextArea = styled.textarea`
  height: 5em;
`;

export const Warning = styled.p`
  color: red;
  font-weight: 500;
`;

export const DonationButton = styled.button`
  font-size: 1rem;
  padding-left: 16px;
  padding-right: 16px;
`;

export { Box, Spacer, Text } from 'components/SharedStyles';
