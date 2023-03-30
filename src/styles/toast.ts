import styled from "styled-components";

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  max-width: 320px;
  padding: 0.9rem !important;
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  z-index: 9999;
`;

export const ToastCloseButton = styled.button`
  color: #fff;
  background: none;
  border: none;
  margin-left: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Progress = styled.div`
  width: 0;
  height: 4px;
  background-color: #ccc;
  position: absolute;
  bottom: 0;
  left: 0;
`;
