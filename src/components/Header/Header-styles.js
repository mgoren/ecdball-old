import styled from 'styled-components';

export const HeaderBox = styled.div`
  background-color: white;
  border: 1px solid #dadce0;
  border-top: 10px solid #613cb0;
  border-radius: 8px;
  padding: 0 24px 24px 24px;
`;
HeaderBox.displayName = 'S.HeaderBox';

export const Title = styled.h2`
  padding-top: 22px;
  text-align: center;
`;
Title.displayName = 'S.Title';

export const Text = styled.p`
  margin: auto;
  text-align: left;
  padding: 10px 24px 1rem 24px;
`;
Text.displayName = 'S.Text';
