import { CaretLeft, CaretRight } from "phosphor-react";
import React from "react";
import { useCarrossel } from "../hooks/useCarrossel";
import {
  CarouselWrapper,
  LeftArrow,
  RightArrow,
  CarouselImage,
} from "../styles/carrossel";

interface CarrosselProps {
  images: string[];
}

const Carrossel: React.FC<CarrosselProps> = ({ images }) => {
  const { handlePrevClick, handleNextClick, currentImageIndex } =
    useCarrossel(images);

  return (
    <CarouselWrapper>
      <LeftArrow onClick={handlePrevClick}>
        <CaretLeft size={32} />
      </LeftArrow>
      <RightArrow onClick={handleNextClick}>
        <CaretRight size={32} />
      </RightArrow>
      <CarouselImage    
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />
    </CarouselWrapper>
  );
};

export default Carrossel;
