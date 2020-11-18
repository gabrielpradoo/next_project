import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: #e1e1e1;
    position: relative;
    overflow-x: hidden;
  }

  body, button, text-area, input{
    font-family: Quicksand, sans-serif;
  }
`;

export default GlobalStyle;
