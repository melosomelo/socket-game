import styled from "styled-components";

interface BallProps {
  left: number;
  top: number;
}

export const Ball = styled.div<BallProps>`
  width: 42px;
  height: 42px;

  background-color: white;

  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  transform: translate(-50%, -50%);
`;
