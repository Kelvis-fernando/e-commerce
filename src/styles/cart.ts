import styled from "styled-components";

export const CartContainer = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const CloseCart = styled.div`
  svg {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.6rem;
    cursor: pointer;
  }
`;

export const CartContent = styled.div`
  h1 {
    font-size: 1.3rem;
    font-weight: bold;
  }

  position: absolute;
  top: 48%;
  right: -11%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 2rem !important;
  border-radius: 0.3rem;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30rem;
  overflow-y: scroll;
  overflow-x: none;
  width: 20rem;
  z-index: 999999;

  button {
    margin-top: 1rem;
    border-radius: 0.3rem;
    background-color: #033b3d;
    color: #fff;
    border: none;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
    width: 100%;

    &:hover {
      background-color: #0d4a3a;
    }
  }

  ul {
    list-style: none;
    width: 100%;

    li {
      border-bottom: 1px solid #b2bebf;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0.6rem;

      svg {
        color: #bd2a2e;
        cursor: pointer;
      }
    }
  }
`;

export const TotalCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  p {
    margin-left: 1rem;
  }
`;
