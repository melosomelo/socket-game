import styled from "styled-components";

interface BallProps {
  left: number;
  top: number;
}

export const Ball = styled.div.attrs<BallProps>((props) => ({
  style: {
    left: `${props.left}px`,
    top: `${props.top}px`,
  },
}))<BallProps>`
  width: 42px;
  height: 42px;

  background-color: white;

  position: absolute;
`;
