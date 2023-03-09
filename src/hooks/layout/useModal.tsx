import { useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return {
    handleModalClose,
    isModalOpen,
    setIsModalOpen,
  };
};
