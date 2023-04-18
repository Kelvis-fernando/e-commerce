import styled from "styled-components";

export const DropdownContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  color: #000;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  width: 8rem;
  margin-top: 0.5rem;
  z-index: 9999;

  h1 {
    margin-top: 0.7rem;
    text-align: center;
  }

  ul {
    margin-top: 0.7rem;
    list-style: none;
    li {
      padding: 0.3rem;
      cursor: pointer;
      width: 100%;
    }
  }
`;
