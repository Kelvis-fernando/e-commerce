import { useState } from "react";

export const SetDefaultImage = (image: string) => {
  const imageDefault =
    "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif";
  const [imageSrc, setImageSrc] = useState(image);

  const handleImageError = () => {
    setImageSrc(imageDefault);
  };

  return {imageSrc, handleImageError}
};
