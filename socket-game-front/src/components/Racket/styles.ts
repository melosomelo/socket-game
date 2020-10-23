import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 150px;

  position: relative;

  padding: 1rem 2rem;
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
