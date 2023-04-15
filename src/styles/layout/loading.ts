import styled, { keyframes } from "styled-components";

export const LoadingContainer = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  color: #fff;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(720deg);
  }
`;

export const LoadingContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  h1 {
    font-size: 1.3rem;
  }
  svg {
    animation: ${rotateAnimation} 1s linear infinite;
    margin-right: 0.5rem;
  }
`;
