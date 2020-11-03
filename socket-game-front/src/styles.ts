import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    background-color: black;
    color: white;
    font-family: "VT323";


    overflow: hidden;

  }

  h1.message {
    font-size: 4rem;
  }
`;

export default GlobalStyles;
