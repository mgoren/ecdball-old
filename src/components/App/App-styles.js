import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f0ebf8;
    min-height: 100vh;
    a {
      color: #8b44fc;
    }
  }
`;

export const Container = styled.div`
  max-width: 650px;
  margin: auto;
  padding: 15px;
`;
Container.displayName = 'S.Container';
