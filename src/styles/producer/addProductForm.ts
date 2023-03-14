import styled from "styled-components";

export const AddProductFormContainer = styled.form`
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  label {
    font-weight: bold;
    font-size: 1.2rem;
  }

  input {
    width: 20rem;
    height: 2.3rem;
    border: 1px solid #0d4a3a;
    padding: 0.3rem;
    border-radius: 0.3rem;
    margin-top: 0.3rem;
  }

  button {
    margin-top: 1rem;
    border-radius: 0.3rem;
    background-color: #033b3d;
    color: #fff;
    border: none;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #0d4a3a;
    }
  }
`;

export const InputStyles = styled.div`
  display: flex;

  div {
    margin: 0.3rem 0.3rem;
  }
`;
