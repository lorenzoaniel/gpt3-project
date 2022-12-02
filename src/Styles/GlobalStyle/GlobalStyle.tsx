import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    /*COLORS*/
    --main-background-color: #040C18;

    /*FONTS*/
    --default-font: 'Manrope', sans-serif; 

    /*STYLES*/
    font-family: var(--default-font);

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
