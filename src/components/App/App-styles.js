import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    background-color: var(--color-lightpurple);
    min-height: 100vh;
  }
`;

export const Container = styled.div`
  &.desktop {
    max-width: 650px;
    margin: auto;
    padding: 15px;
  }
`;
Container.displayName = 'S.Container';

export const localhostBanner = styled.div`
  color: red;
  font-weight: bold;
  text-align: center;
`;