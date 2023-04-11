/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import imageDefault from "../assets/default-img.gif"

export const setDefaultImage = (image: string) => {
  const [imageSrc, setImageSrc] = useState(image);

  const handleImageError = () => {
    setImageSrc(imageDefault);
  };

  return {imageSrc, handleImageError}
};
