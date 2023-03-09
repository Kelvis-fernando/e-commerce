import { useState } from "react";

export const useCarrossel = (images: string[]) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  console.log(images)

  const handlePrevClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };
  return { handlePrevClick, handleNextClick, currentImageIndex };
};
