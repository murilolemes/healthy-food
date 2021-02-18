import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #FAFAFC;
    color: #9E9BAF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px 'Mulish', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: #1D164D;
  }

  #root {
    max-width: 1366px;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;
