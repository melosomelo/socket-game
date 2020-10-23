import styled from "styled-components";

interface WrapperProps {
  wrapperPosition: "top" | "bottom";
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  min-height: 150px;

  position: absolute;

  padding: 1rem 2rem;

  ${(props) =>
    props.wrapperPosition === "top" ? "top: 80px" : "bottom: 80px"};
`;

interface ScoreProps {
  scoreColor: string;
  scorePosition: "topLeft" | "bottomRight";
}

export const Score = styled.h1<ScoreProps>`
  font-size: 4.5rem;

  color: ${(props) => props.scoreColor};

  position: absolute;

  ${(props) =>
    props.scorePosition === "bottomRight"
      ? `
    bottom: 0;
    right: 5%;
  `
      : `
    top: 0;
    left: 5%;
  `}
`;

interface RectangleProps {
  rectangleColor: string;
  // props to initially set the position correctly
  left: number;
}

export const Rectangle = styled.div<RectangleProps>`
  height: 75px;
  width: 400px;

  background-color: ${(props) => props.rectangleColor};

  position: absolute;
  left: ${(props) => props.left}px;
`;
