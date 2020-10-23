import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: black;
    color: white;
    font-family: "VT323";


    overflow: hidden;

  }
`;

export default GlobalStyles;
