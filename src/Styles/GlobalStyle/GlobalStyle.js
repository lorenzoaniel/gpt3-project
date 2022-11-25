import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scrollbar-width: none;
  }

  html {
    height: 100vh;
    width: 100vw;

    body{
      background-color: red;

      #root{
        background-color: green;
        height: 5571px;
        width: 100%;
      }
    }
  }
`;
