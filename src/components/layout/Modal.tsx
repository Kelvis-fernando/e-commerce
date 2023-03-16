import React from "react";
import { ModalContent, ModalWrapper, CloseModal } from "../../styles/layout/modal";
import { ModalProps } from "../../types/modal";
import { X } from "phosphor-react";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        {onClose ? <CloseModal><X onClick={onClose} color="#000" size={25} /></CloseModal> : null}
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
