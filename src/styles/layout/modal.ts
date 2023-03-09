import styled from "styled-components";

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 0.3rem;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;

  svg {
    cursor: pointer;
    position: absolute;
    top: 2%;
    right: 2%;
    font-weight: bold;
  }
`;
