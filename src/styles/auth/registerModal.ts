import styled from "styled-components";

export const RegisterModalContainer = styled.div`
  height: 20rem;
  overflow-y: scroll;
  overflow-x: none;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  h2 {
    text-align: center;
    margin-top: 1rem;
    cursor: pointer;
  }
`;
