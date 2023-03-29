import { useState } from "react";

const useToast = () => {
  const [showToast, setShowToast] = useState(false);

  const handleButtonClick = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };
  return { showToast, handleButtonClick, handleCloseToast };
};

export default useToast;
