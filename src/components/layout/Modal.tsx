import React from "react";
import { ModalContent, ModalWrapper } from "../../styles/layout/modal";
import { ModalProps } from "../../types/modal";
import { X } from "phosphor-react";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        <X onClick={onClose} color="#000" size={25} />
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
