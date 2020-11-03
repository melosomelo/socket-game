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
    props.wrapperPosition === "top" ? "top: 20px" : "bottom: 20px"};
`;

interface ScoreProps {
  scoreColor: string;
  scorePosition: "topLeft" | "bottomRight";
}

export const Score = styled.h1<ScoreProps>`
  font-size: 5.5rem;

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
  wrapperPosition: "top" | "bottom";
}

export const Rectangle = styled.div.attrs<RectangleProps>((props) => ({
  style: {
    left: `${props.left}px`,
  },
}))<RectangleProps>`
  height: 75px;
  width: 400px;

  background-color: ${(props) => props.rectangleColor};

  position: absolute;
  ${(props) => (props.wrapperPosition === "top" ? `top: 0;` : "bottom: 0;")}
`;
