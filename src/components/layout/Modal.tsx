import { XCircle } from "phosphor-react";
import { useModal } from "../../hooks/layout/useModal";
import { ModalContainer, HeaderModal } from "../../styles/layout/modal";
import { ModalProps } from "../../types/modal";

const Modal = ({ title, message, close, open }: ModalProps) => {
  const { onClose } = useModal();

  return (
    <ModalContainer>
      <HeaderModal>
        <XCircle size={32} onClick={() => onClose()} />
      </HeaderModal>

      <h1>{title}</h1>
      <p>{message}</p>
    </ModalContainer>
  );
};

export default Modal;
