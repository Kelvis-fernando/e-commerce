import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 1000;
  border-radius: 0.3rem;
  width: 30vw;
  height: 50vh;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  box-shadow: 1px 1px 1px 3px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 1.5rem;
  }
`;

export const HeaderModal = styled.header`
  position: absolute;
  right: 0;

  &:hover {
    color: #999;
  }
`;
