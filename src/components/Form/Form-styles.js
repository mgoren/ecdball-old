import styled from 'styled-components';

export const Box = styled.div`
  background-color: white;
  border: 1px solid #dadce0;
  border-radius: 8px;
  margin-top: 12px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
`;
Box.displayName = 'S.Box';

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

export const Spacer = styled.div`
  height: 2rem;
`;
