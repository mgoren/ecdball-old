import styled from 'styled-components';

export const HeaderBox = styled.div`
  background-color: white;
  border: 1px solid #dadce0;
  border-top: 10px solid #613cb0;
  border-radius: 8px;
  padding: 0 24px 24px 24px;
`;
HeaderBox.displayName = 'S.HeaderBox';

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

export const Spacer = styled.div`
  height: 2rem;
`;
