import styled from "styled-components";

export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 400px;
`;

export const CarouselImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 130%;
  object-fit: cover;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(0.9);
  }
`;

export const LeftArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1000;
`;

export const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1000;
`;
