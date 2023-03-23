import styled from "styled-components";

export const ToastContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 25rem;
  height: 7rem;
  margin: 0.2rem;
  padding: 1rem;
  border-radius: 0.3rem;

  p {
    margin-top: 1rem;
  }
`;
